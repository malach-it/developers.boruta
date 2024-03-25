

:::info
Please refer to [the authentication framework overview page](/auth-framework-overview.md) for a more general approach of how authentication works.
:::

---

## Description

The Authorization Code Grant is considered the most secure flow within the OAuth 2.0 specification, particularly suited for applications capable of securely maintaining a client secret.

This flow involves a **three-legged authorization process** involving the user's browser (user agent), the client application, and the authorization server (AS). It is designed to securely authenticate the user and authorize the client application without exposing the user's credentials to the client.

The process includes the following steps:

* The client application redirects the user to the authorization server, where the user logs in and grants the client application permission to access their resources.
* Upon successful authentication and authorization, the authorization server redirects the user back to the client with an authorization code.
* The client then exchanges this authorization code for an access token by making a request to the authorization server, including its client ID and client secret for authentication.
* The authorization server validates the request and issues an access token (and optionally a refresh token) to the client.

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

![The create button in boruta's interface](/static/assets/images/create.png "Create button")

--> Learn more on how to create and configure a backend on [this page](https://developers.boruta.patatoid.fr/docs/provider-configuration/configure-backends)

* You will also need to have an **identity provider**

To do so, click the top right button "create" while being in the Identity provider section.
Pick a name and choose in the list on of the backend you previously created, then click on "create".

--> Learn more on how to create and configure an identity provider on [this page](https://developers.boruta.patatoid.fr/docs/provider-configuration/configure-identity-providers).

---

### Flow

The steps below explain how to follow the procedure indicated in the [OAuth 2.0 spec](https://www.rfc-editor.org/rfc/rfc6749#section-4.1)for the code grant flow in boruta. You can either use the interface or [the API](https://developers.boruta.patatoid.fr/api) to perform the required actions.

#### Step A

* Navigate to the server's configuration page and find the authorization endpoint URL.
It is typically the issuer's address followed by "/oauth/authorize".

--> <https://oauth.boruta.patatoid.fr/.well-known/openid-configuration>

* Locate your client identifier in the client view section; this is your client ID.

![The Client ID in boruta's interface](/static/assets/images/client-id.png "Client ID")

* Determine the required scope for your application.

You can determine scopes at the client, backend, and user levels.
For a deeper understanding, please refer to [the scope creation and access documentation](/provider-configuration/configure-scopes.md).

* Generate a unique, random string for the local state to ensure the originating request comes from your client.

* Specify a redirection URI where the user will be sent after authentication.

This must be one of the registered redirect URIs in the client view.

![The redirection URI in boruta's interface](/static/assets/images/redirect-uri.png "Specify a redirection URI")

* Construct your request to the authorization endpoint using the provided format.

```
GET <issuer>/oauth/authorize?client_id=<client id>&scope=<scope>&state=<state>&redirect_uri=<redirect uri>&response_type=code`
```

This process initiates the OAuth 2.0 authorization flow, guiding the user through authentication and ensuring secure access control.


---
---
---

*not done yet*

---

#### Step B.

user authenticates

- server configuration (authentication)

    - templates

        - edit layout template

        - edit login template

    - MFA with TOTP

    - deeper understanding in identity provider page

- result of the step

    - client authenticated

---

#### Step C.

Callback to the client application through the user-agent of the resource owner

- server configuration

    - none

- explanations

    - authorization code

        - code that helps the client to get an access token at authorizarion code phace (D)

    - local state

        - should be the same string as in (A) to ensure the origin of the request

- result

```

302 redirected

<redirect uri>?code=<authorization code>&state=<state>

```

1. the user-agent provides the code to the client application

2. the client requests an access token

```

POST <issuer>/oauth/token

code=<code>&client_id=<client id>&redirect_uri=<redirect uri>&grant_type=authorization_code

```
---

#### Step D.

The client requests the access token

- server configuration

    - client authentication

        - client form "Client authentication" part

        - link to the client resource @pascal write a client authentication section in it

    - validates the authorization code

        - code TTL in client form


The request will return a code 200 like so:

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

