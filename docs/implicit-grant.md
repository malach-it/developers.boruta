
:::info
Please refer to [the authentication framework overview page](/auth-framework-overview.md) for a more general approach of how authentication works.
:::

---

## Description

The Implicit Grant is tailored specifically for **client-side applications**, particularly those running in a **browser environment**, such as JavaScript applications.

This [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749#section-4.2) flow facilitates the direct issuance of an access token to the client application without the need for intermediary authorization codes, streamlining authentication for scenarios where the application cannot securely store credentials.

The flow involves the following steps:

* The client application redirects the user to the authorization server, providing a registered redirect URI that must use HTTPS, ensuring secure communication.
* The user authenticates with the authorization server and grants the client application permission to access their resources.
* The authorization server directly redirects the user-agent back to the client application with the access token included in the fragment part of the redirect URI.
* The client application extracts the access token from the URI fragment. Since fragments are not sent to the server but are accessible via JavaScript running in the browser, this ensures that the access token remains within the client's browser session.
* The access token can then be used by the client application to make requests to the resource server on behalf of the user.

     +----------+
     | Resource |
     |  Owner   |
     |          |
     +----------+
          ^
          |
         (B)
     +----|-----+          Client Identifier     +---------------+
     |         -+----(A)-- & Redirection URI --->|               |
     |  User-   |                                | Authorization |
     |  Agent  -|----(B)-- User authenticates -->|     Server    |
     |          |                                |               |
     |          |<---(C)--- Redirection URI ----<|               |
     |          |          with Access Token     +---------------+
     |          |            in Fragment
     |          |                                +---------------+
     |          |----(D)--- Redirection URI ---->|   Web-Hosted  |
     |          |          without Fragment      |     Client    |
     |          |                                |    Resource   |
     |     (F)  |<---(E)------- Script ---------<|               |
     |          |                                +---------------+
     +-|--------+
       |    |
      (A)  (G) Access Token
       |    |
       ^    v
     +---------+
     |         |
     |  Client |
     |         |
     +---------+

   Note: The lines illustrating steps (A) and (B) are broken into two
   parts as they pass through the user-agent.

*Figure 1: Implicit Grant Flow. Source: [IETF](https://datatracker.ietf.org/doc/html/rfc6749#section-4.2)*

This flow capitalizes on the browser's capability to handle redirections and fragments, ensuring that access tokens are not exposed to servers but are accessible to the client-side application that initiated the request.

---

## Use cases

The Implicit Grant is primarily used for **client-side applications** where the application's confidentiality cannot be ensured, such as:

* **Single Page Applications (SPAs)** that rely heavily on JavaScript and run entirely within the browser.
* Applications that cannot securely store client secrets due to their execution environment, making the traditional server-side authentication flows impractical.

---

## Limits and Constraints

The Implicit Grant, while convenient for certain types of applications, has notable limitations and security considerations:

* **Security Concerns**: Because the access token is exposed in the URI fragment and stored in the browser session, there is an increased risk of access token leakage compared to other OAuth 2.0 flows.

* **Deprecation and Shift Towards Authorization Code with PKCE**: Due to its security shortcomings, the use of the Implicit Grant has been discouraged in favor of more secure flows like the Authorization Code Grant with Proof Key for Code Exchange (PKCE). The latter provides enhanced security for public clients, such as mobile and SPA applications, by mitigating many of the vulnerabilities associated with the Implicit Grant.

* **Limited Token Lifespan**: Given the higher risk profile of tokens issued via the Implicit Grant, these tokens often have a shorter lifespan, necessitating more frequent renewals.

---

:::warning
**Security Best Practices**
Applications using the Implicit Grant should enforce strict [CORS (Cross-Origin Resource Sharing)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) policies and implement other frontend security measures to protect against [Cross-Site Scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) and token interception attacks. Furthermore, migrating to more secure OAuth 2.0 flows, such as the Authorization Code Flow with PKCE, is recommended to enhance application security.
:::

---

## How to integrate this flow

### Step A: user authorization request

**Description**

The client initiates the flow by redirecting the user's browser to the authorization server, requesting access to the resource owner's resources. 
This step involves preparing a URL to the authorization endpoint with specific query parameters.

**Configuration**

* **Authorization Endpoint URL**: Determine the authorization server's endpoint URL where the authorization request will be sent.
  
* **Client ID**: Include the client's identifier issued by the authorization server when it was registered.

* **Redirect URI**: Specify the URI to which the authorization server will send the user-agent back once access is granted or denied.

* **Scope**: Define the scope of the access request, which specifies the resources that the application intends to access.
Learn more about how to configure scopes on [this page](https://developers.boruta.patatoid.fr/docs/provider-configuration/configure-scopes).

* **State**: Generate a CSRF token to mitigate cross-site request forgery attacks, ensuring the response to the request can be validated as coming from the user.

**Result**

The user is redirected to the authorization endpoint where they can authenticate and approve the client's access request.
The client constructs and sends a request like this:

```
GET <authorization_endpoint>?response_type=token&client_id=<client_id>&redirect_uri=<redirect_uri>&scope=<scope>&state=<state>
```
---

### Step 2: authorization response

**Description**

Assuming the resource owner grants access, the authorization server redirects the user-agent back to the client using the provided redirect URI.
This redirection URI includes an access token and optionally a state parameter in its fragment.

**Configuration**

* **No explicit server configuration by the client**: The redirection URI and access token are generated and managed by the authorization server.

**Result**

The user-agent is redirected to the client's specified redirect URI with the access token and state (if provided) included in the URI fragment, not the query string, to ensure that they are not sent to the web server on a subsequent request. The URL to which the user-agent is redirected would look something like this:

```
<redirect_uri>#access_token=<access_token>&token_type=Bearer&expires_in=<expiration_time>&state=<state>
```

---

### Step 3: accessing protected resources

**Description**

With the access token now in the client's possession, the client can use it to make authenticated requests to the resource server on behalf of the user.

**Configuration**

* **Use of Access Token**: The client includes the access token in the Authorization header of HTTP requests to the resource server.

**Result**

The resource server validates the access token and, if valid, serves the request. 
The client accesses protected resources by including the access token in the HTTP header like so:

```
GET <resource_endpoint>
Authorization: Bearer <access_token>
```