---
title: Implicit grant
---

:::info
Please refer to [the authentication overview page]() for a more general approach of how authentication works.
!!!

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

:::warning
**Security Best Practices**
Applications using the Implicit Grant should enforce strict [CORS (Cross-Origin Resource Sharing)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) policies and implement other frontend security measures to protect against [Cross-Site Scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) and token interception attacks. Furthermore, migrating to more secure OAuth 2.0 flows, such as the Authorization Code Flow with PKCE, is recommended to enhance application security.
:::