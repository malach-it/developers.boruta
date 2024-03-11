---
title: Ressource Owner Password Credentials
---

:::info
Please refer to [the authentication overview page] for a more general approach of how authentication works.
:::

---

## Description

The Resource Owner Password Credential (ROPC) flow is one of the standard flows defined in [OAuth2](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.3).

The Resource Owner Password Credentials Grant (ROPC) allows a client application to directly request an access token from the authorization server using the resource owner's username and password.

This flow **bypasses the need for a user to be redirected to an authentication page**, streamlining access in specific scenarios.

The process involves the client submitting the resource owner's credentials to the authorization server, which then validates these credentials and returns an **access token**.

This token grants the client application authorization to access the protected resources on the resource server on behalf of the resource owner.

The key steps in the ROPC flow include:

* The client application requests access from the resource owner by obtaining their **username and password**.
* The client then sends these credentials to the authorization server, along with its authentication information.
* Upon successful authentication of both the client and the resource owner, the authorization server issues an access token to the client.
* The client uses this access token to request the protected resources from the resource server.
* The resource server validates the access token by consulting the authorization server and, if valid, serves the requested resources.

---

## Use cases

The ROPC flow is specifically recommended for use cases where **the application and resource owner maintain a high level of trust**.

This typically applies to **legacy systems** or specific environments where newer OAuth 2.0 flows cannot be implemented.

The primary use cases include:

* Internal applications within an organization where user credentials are managed securely, and the risk of credential exposure is minimized.
* Migration scenarios where legacy systems require an interim solution for authentication and authorization while transitioning to more secure OAuth 2.0 flows.
* Applications operating in constrained environments where redirect-based flows are not feasible.

---

## Limits and constraints

While ROPC provides a straightforward authentication mechanism, it introduces several limitations and security concerns, including:

* **Security Risks**: Exposing user credentials to the client application increases the risk of phishing and other forms of credential theft. It is contrary to the broader goals of OAuth 2.0, which aims to avoid sharing passwords with third parties.

* **Limited Use**: Suitable only in scenarios where the client is highly trusted, such as internal or legacy applications. It is not recommended for third-party or public client applications.

* **Lack of Single Sign-On (SSO)**: The direct handling of usernames and passwords by the client application means that ROPC cannot leverage SSO capabilities, reducing user convenience and security.

* **Deprecation Considerations**: The security community and industry best practices generally discourage ROPC's use in new projects. There's a movement towards more secure and interactive authorization flows that provide better user experience and security guarantees.


:::warning
**Security Best Practices**
If ROPC must be used, it's imperative to secure the application using HTTPS to encrypt the credentials in transit and implement robust security measures to protect stored credentials. Regularly reviewing and updating these practices is needed to maintain the security and integrity of the system.
:::
