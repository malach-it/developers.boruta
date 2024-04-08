# Authorization code grant

:::info
Please refer to [the authentication framework overview page](/auth-framework-overview.md) for a more general approach of how authentication works.
:::

---

The Authorization Code Grant is considered the most secure flow within the OAuth 2.0 specification, particularly suited for applications capable of securely maintaining a client secret.

This flow involves a **three-legged authorization process** involving the user's browser (user agent), the client application, and the authorization server (AS). It is designed to securely authenticate the user and authorize the client application without exposing the user's credentials to the client.

The process includes the following steps:

* The client application redirects the user to the authorization server, where the user logs in and grants the client application permission to access their resources.
* Upon successful authentication and authorization, the authorization server redirects the user back to the client with an authorization code.
* The client then exchanges this authorization code for an access token by making a request to the authorization server, including its client ID and client secret for authentication.
* The authorization server validates the request and issues an access token (and optionally a refresh token) to the client.

```ascii-diagram
     +----------+
     | Resource |
     |   Owner  |
     |          |
     +----------+
          ^
          |
         (B)
     +----|-----+          Client Identifier      +---------------+
     |         -+----(A)-- & Redirection URI ---->|               |
     |  User-   |                                 | Authorization |
     |  Agent  -+----(B)-- User authenticates --->|     Server    |
     |          |                                 |               |
     |         -+----(C)-- Authorization Code ---<|               |
     +-|----|---+                                 +---------------+
       |    |                                         ^      v
      (A)  (C)                                        |      |
       |    |                                         |      |
       ^    v                                         |      |
     +---------+                                      |      |
     |         |>---(D)-- Authorization Code ---------'      |
     |  Client |          & Redirection URI                  |
     |         |                                             |
     |         |<---(E)----- Access Token -------------------'
     +---------+       (w/ Optional Refresh Token)
```

   Note: The lines illustrating steps (A), (B), and (C) are broken into
   two parts as they pass through the user-agent.

*Figure 1: Authorization Code Flow. Source: [IETF](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1)*


For public clients, such as mobile or SPA applications, which cannot securely store a client secret, the Authorization Code Grant can be augmented with [Proof Key for Code Exchange (PKCE)](https://oauth.net/2/pkce/).

PKCE adds an additional layer of security by requiring the client to send a cryptographically related code verifier along with the authorization code when exchanging it for an access token. This mechanism protects against interception and unauthorized code exchange attempts.

---

## Use cases

Use cases include:

* **Web applications** where the server hosting the application can securely store the client secret and interact with the authorization server.
* **Mobile applications and Single Page Applications (SPAs)**, which are considered public clients and can't securely store secrets. PKCE extends the Authorization Code Grant to these applications, mitigating the risk of authorization code interception.

---

## Limits and Constraints

While the Authorization Code Grant is highly secure, it presents certain implementation complexities:

* **Complex Setup**: The multi-step process, especially when augmented with PKCE for public clients, requires more intricate handling compared to simpler flows like the Implicit Grant.

* **Backend Requirements**: Except for scenarios using PKCE, this flow necessitates a backend component to securely store the client secret and handle the exchange of the authorization code for an access token.

Despite these challenges, the Authorization Code Grant, particularly with PKCE, is highly recommended for most OAuth 2.0 scenarios due to its enhanced security profile.

---

:::warning
**Security Best Practices**
Applications should ensure secure transmission of all requests to the authorization server, typically via HTTPS, to protect against man-in-the-middle attacks. Regularly rotating client secrets and employing strict redirect URI validation are also crucial to maintaining security.
:::

---

## How to integrate this flow

### Prerequisites

* You will need to have a **created backend**

To create new elements in boruta, use the top right button "create".

> Learn more on how to create and configure a backend on [this page](provider-configuration/configure-backends)

* You will also need to have an **identity provider**

To do so, click the top right button "create" while being in the Identity provider section.
Pick a name and choose in the list on of the backend you previously created, then click on "create".

> Learn more on how to create and configure an identity provider on [this page](provider-configuration/configure-identity-providers).

* Finaly, you will need to have a **client**

To do so, click the top right button "create" while being in the client section.
Pick a name and choose in the list on of the backend you previously created, then click on "create".

> Learn more on how to create and configure an client on [this page](provider-configuration/configure-clients).

---

### Authorization code flow

The steps below explain how to follow the procedure indicated in the [OAuth 2.0 spec](https://www.rfc-editor.org/rfc/rfc6749#section-4.1) for the code grant flow in boruta. You can either use the interface or [the API](https://developers.boruta.patatoid.fr/api) to perform the required actions.

---

#### Step A: prepare the authorization request

This initial step involves preparing for the OAuth 2.0 authorization process by setting up the necessary parameters for the authorization request. This setup includes locating the authorization endpoint, identifying your client ID, defining the required scopes, generating a state parameter, and specifying a redirect URI.

**Configuration**

* **Locate the Authorization Endpoint**: Start by navigating to the server's configuration page to find the authorization endpoint URL, which is usually the issuer's address followed by /oauth/authorize. An example is <https://oauth.boruta.patatoid.fr/.well-known/openid-configuration>.

* **Identify Your Client ID**: Find your client identifier (client ID) in the client view section of the server's configuration. This unique ID represents your application in the OAuth flow.

* **Determine Required Scopes**: Scopes define the level of access your application needs. These can be set at various levels, including the client, backend, and user levels. For more information on defining scopes, refer to the scope creation and access documentation.

* **Generate a Unique State**: Create a unique, random string to serve as the state parameter. This ensures that the response to your authorization request originates from your client, preventing cross-site request forgery (CSRF) attacks.

* **Specify a Redirection URI**: Choose a redirection URI where the user will be directed after authentication. This URI must be pre-registered in your client configuration to be recognized as valid.

**Step result**

Construct the authorization request by combining all the parameters into a single URL, following the specified format. This URL initiates the OAuth 2.0 authorization flow, leading the user through the authentication process and towards secure access control.

The request format looks like this:

```
GET <issuer>/oauth/authorize?client_id=<client_id>&scope=<scope>&state=<state>&redirect_uri=<redirect_uri>&response_type=code
```

---

#### Step B: authenticate user

This step involves authenticating the user through the server. It requires configuring the server to authenticate users effectively, using customized templates and implementing Multi-Factor Authentication (MFA) with TOTP for enhanced security. This requires a deep understanding of the identity provider's settings.

**Configuration**

* **Server Configuration for Authentication**: Customize the layout and login templates to fit the application's user experience.

* **Implement MFA with TOTP**: Add an extra layer of security by enabling Multi-Factor Authentication using Time-Based One-Time Passwords.

* **Identity Provider Settings**: Gain a thorough understanding of the identity provider page to configure authentication settings appropriately.

**Step result**

The client is authenticated, allowing the authentication flow to proceed to the next step.

```
302 Found

Location: <redirect_uri>#code=<authorization_code>&access_token=<access_token>&state=<state>&token_type=Bearer&expires_in=3600
```

---

#### Step C: obtain authorization code

After user authentication, the server issues a callback to the client application through the resource owner's user-agent. This step involves no server configuration but requires understanding the authorization code and local state to ensure the request's origin is verified.

**Configuration**

* **Server Configuration**: None required for this step.

* **Understanding Authorization Code and Local State**: The authorization code is needed to obtain an access token in the next phase. The local state should match the initial request to verify the request's origin.

**Step result**

The user-agent is redirected with a 302 status to the client application, appending the authorization code and state to the redirect URI.
The process is as follows:

* The user-agent, typically a web browser, receives the redirect and provides the authorization code to the client application.
* The client application then uses this code to request an access token from the authorization server. This is done by sending a POST request to the issuer's /oauth/token endpoint with the code, client ID, redirect URI, and grant type specified as authorization_code.

The HTTP request made by the client looks like this:

```
POST <issuer>/oauth/token
Content-Type: application/x-www-form-urlencoded

code=<authorization_code>&client_id=<client_id>&redirect_uri=<redirect_uri>&grant_type=authorization_code
```

This marks the transition from obtaining the authorization code to requesting the access token.

---

#### Step D: access token request

The client uses the authorization code to request an access token.
This involves server configuration for client authentication and validating the authorization code.

**Configuration**

* **Client Authentication Configuration**: Configure the server to authenticate the client, including setting up forms for client authentication and linking to resources for further information.

* **Authorization Code Validation**: Ensure the authorization code is validated correctly, including checking the code's time-to-live (TTL).

**Step result**

The server responds with a 200 OK status, providing the access token, token type, expiry time, and refresh token in JSON format. This access token is essential for accessing protected resources.

```json
200 OK

Content-Type: application/json

{

    "access_token": <AT>,

    "token_type": "bearer",

    "expires_in": 3600,

    "refresh_token": <RT>

}
```
