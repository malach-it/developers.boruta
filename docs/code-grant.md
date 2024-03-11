---
title: Code grant
---

:::info
Please refer to [the authentication overview page]() for a more general approach of how authentication works.
!!!

---

## Description

The Authorization Code Grant is considered the most secure flow within the OAuth 2.0 specification, particularly suited for applications capable of securely maintaining a client secret. 

This flow involves a **three-legged authorization process** involving the user's browser (user agent), the client application, and the authorization server (AS). It is designed to securely authenticate the user and authorize the client application without exposing the user's credentials to the client.

The process includes the following steps:

* The client application redirects the user to the authorization server, where the user logs in and grants the client application permission to access their resources.
* Upon successful authentication and authorization, the authorization server redirects the user back to the client with an authorization code.
* The client then exchanges this authorization code for an access token by making a request to the authorization server, including its client ID and client secret for authentication.
* The authorization server validates the request and issues an access token (and optionally a refresh token) to the client.

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

:::warning
**Security Best Practices**
Applications should ensure secure transmission of all requests to the authorization server, typically via HTTPS, to protect against man-in-the-middle attacks. Regularly rotating client secrets and employing strict redirect URI validation are also crucial to maintaining security.
:::