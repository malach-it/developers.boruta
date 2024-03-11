---
title: Hybrid grant
---

:::info
Please refer to [the authentication overview page] for a more general approach of how authentication works.
:::

---

## Description

The Hybrid Grant is a sophisticated flow introduced by [OpenID Connect](https://openid.net/developers/how-connect-works/), an authentication layer built on top of [the OAuth 2.0 protocol](https://www.rfc-editor.org/rfc/rfc6749#), developed by the OpenID Foundation.

This flow is designed to handle both authentication and authorization processes by providing additional identity information alongside the standard OAuth access token.

The Hybrid Grant allows a client application to receive **an authorization code** and an **ID token** (and optionally an access token) directly from the authorization request, combining elements from both the Authorization Code and Implicit Grants.

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

:::warning
**Security Best Practices**
Ensure secure handling and validation of ID tokens, including verifying the signature and claims. Implement appropriate measures to protect against common web application vulnerabilities, such as [Cross-Site Scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) and [Cross-Site Request Forgery (CSRF)](https://en.wikipedia.org/wiki/Cross-site_request_forgery), especially when handling tokens and user identity information in a client-side context.
:::

