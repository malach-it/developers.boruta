# Hybrid grant

:::info
Please refer to [the authentication framework overview page](/auth-framework-overview.md) for a more general approach of how authentication works.
:::

---

The Hybrid Grant is a sophisticated flow introduced by [OpenID Connect](https://openid.net/developers/how-connect-works/), an authentication layer built on top of [the OAuth 2.0 protocol](https://www.rfc-editor.org/rfc/rfc6749#), developed by the OpenID Foundation.

This flow is designed to handle both authentication and authorization processes by providing additional identity information alongside the standard OAuth access token.

The Hybrid Grant allows a client application to receive **an authorization code** and an **ID token** (and optionally an access token) directly from the authorization request, combining elements from both the [Authorization Code](/code-grant.md) and [Implicit Grants](/implicit-grant.md).

The process typically unfolds as follows:

* The client initiates the flow by redirecting the user to the authorization server, requesting an authorization code and ID token (and optionally an access token).
* Upon successful authentication and consent by the user, the authorization server redirects the user back to the client with the authorization code and ID token (and optionally an access token) included in the URI fragment or query.
* The client can immediately use the ID token to obtain user identity information and must exchange the authorization code at the authorization server's token endpoint for an access token (if it was not already provided).

This approach allows the client to begin using identity information and access tokens without waiting for additional server-to-server requests, streamlining certain use cases.

---

## Use Cases

The Hybrid Grant is particularly useful for:

* **Client applications** requiring immediate access to identity information as well as tokens for accessing protected resources. This includes applications needing to display user details or make decisions based on the user's identity shortly after authentication.

* **Applications that benefit from a mix of front-end and back-end token requests**, allowing for flexible handling of authentication and authorization data based on the application's architecture and security requirements.

---

## Limits and Constraints

While the Hybrid Grant offers flexibility and immediate access to identity information, it also introduces certain considerations:

* **Complexity**: The Hybrid Grant's combination of implicit and authorization code mechanisms can increase the complexity of implementation and token handling within the client application.

* **Security Considerations for ID Tokens**: Although ID tokens provide valuable identity information, they are not meant to authorize access to resources. Misusing ID tokens for authorization can lead to security vulnerabilities. Proper validation and usage of ID tokens are crucial.

* **Optimal Use Cases**: The Hybrid Grant is best suited for applications that have a specific need for immediate access to identity information alongside authorization tokens. It may not be necessary for simpler applications that do not require immediate access to user identity details.

---

:::warning
**Security Best Practices**
Ensure secure handling and validation of ID tokens, including verifying the signature and claims. Implement appropriate measures to protect against common web application vulnerabilities, such as [Cross-Site Scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) and [Cross-Site Request Forgery (CSRF)](https://en.wikipedia.org/wiki/Cross-site_request_forgery), especially when handling tokens and user identity information in a client-side context.
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

### Hybrid flow

#### Step A: Authorization Request

The client initiates the flow by directing the user-agent to the authorization server's authorization endpoint. This request includes parameters indicating the response types the client wishes to receive, which can be a combination of code and token (and optionally id_token in OpenID Connect).

**Configuration**

* **Authorization Endpoint URL**: Determine the URL for the authorization server's authorization endpoint.

* **Client ID and Redirect URI**: Include the client's identifier and the redirect URI where the authorization server will send the user-agent after granting or denying access.

* **Response Type**: Specify the combination of code, token, and id_token that the client is requesting.

* **Scope**: Define the scope of access the client is requesting.
Learn more about how to configure scopes on [this page](https://developers.boruta.patatoid.fr/docs/provider-configuration/configure-scopes).

* **State**: Generate a CSRF token to mitigate cross-site request forgery attacks.

**Result**

The client constructs and sends an authorization request to the authorization server.
An example request might look like this:

```
GET <authorization_endpoint>?client_id=<client_id>&redirect_uri=<redirect_uri>&response_type=code%20token&scope=<scope>&state=<state>
```

---

#### Step B: Authorization Response

If the user consents to the request, the authorization server redirects the user-agent back to the client with the requested tokens.
The authorization code and possibly an access token (and an ID token if requested) are included in the response.

**Configuration**

* **No explicit configuration by the client**: The response's composition depends on the authorization server and the initial request's parameters.

**Result**

The authorization server redirects the user-agent to the client's redirect URI, providing the authorization code and possibly an access token (and ID token) in the URI fragment or query, depending on the response type requested. The redirect might look like this:

```
302 Found

Location: <redirect_uri>#code=<authorization_code>&access_token=<access_token>&state=<state>&token_type=Bearer&expires_in=3600
```

---

#### Step C: Token Request (Optional)

If the response type included code, the client can use this authorization code to request an access token (and refresh token) from the authorization server's token endpoint. This step is performed server-to-server, enhancing security by not exposing the authorization code to the user-agent.

**Configuration**

* **Token Endpoint URL**: Identify the token endpoint of the authorization server.

* **Authorization Code**: Use the code obtained in the authorization response.

* **Client Authentication**: Authenticate to the authorization server typically using the client's credentials.

**Result**

The client sends a request to the token endpoint to exchange the authorization code for an access token (and refresh token).
The request and response format follows the Authorization Code flow:

```
POST <token_endpoint>
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&code=<authorization_code>&redirect_uri=<redirect_uri>&client_id=<client_id>
```

The server responds with an access token (and refresh token) in a JSON format.

---

#### Step D: Accessing Protected Resources

The client uses the access token obtained either directly from the authorization response (step 2) or from the token endpoint (step 3) to make authenticated requests to the resource server.

**Configuration**

* **Use of Access Token**: Include the access token in the Authorization header of requests to the resource server.

**Result**

The resource server validates the access token and, if valid, serves the request. The client accesses protected resources by including the access token in the HTTP header:

```
GET <resource_endpoint>
Authorization: Bearer <access_token>
```
