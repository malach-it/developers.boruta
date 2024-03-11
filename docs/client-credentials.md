---
title: Client credentials
---

:::info
Please refer to [the authentication overview page] for a more general approach of how authentication works.
:::

---
## Description

The Client Credentials Grant is a server-to-server authentication mechanism defined in the [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.4) framework.

It is designed for scenarios where an application, acting on its own behalf rather than on behalf of an individual user, requires access to a protected resource.

The flow does not involve a resource owner (end-user) but relies on the client application's credentials (**Client ID and Client Secret**) to authenticate and obtain an access token directly from the authorization server.

The key steps in the Client Credentials flow are as follows:

* The client application authenticates to the authorization server using its **Client ID and Client Secret**.
* Upon successful authentication, the authorization server issues an **access token** to the client.
* The client uses this access token to request the protected resources from the resource server.
* The resource server validates the access token and, if valid, serves the requested resources.

This flow is straightforward and involves a single authenticated call to the authorization server, simplifying machine-to-machine communication where no user interaction is required.

--

## Use Cases

The Client Credentials Grant is ideally suited for machine-to-machine (M2M) communication where an application needs to access resources or perform actions without user intervention. Typical use cases include:

* Internal backend services communicating with each other within the boundaries of a single organization.
* Server-to-server applications where an application needs to access APIs or resources owned by the same entity that owns the client application.
* Automated tasks, scripts, or batch jobs that require access to protected resources but do not operate on behalf of a specific user.

---

## Limits and Constraints

While the Client Credentials Grant streamlines authentication for M2M communication, it comes with specific limitations and security considerations:

* **Security of Client Credentials**: The client secret is a sensitive piece of information that must be protected from unauthorized access. Exposure of the client secret can lead to impersonation and unauthorized access to protected resources.

* **Secret Rotation**: To mitigate the risk of client secret exposure, it is advisable to implement secret rotation policies. This involves periodically changing the client secret and updating the client application with the new secret to maintain security.

* **Applicability**: This flow is not suitable for scenarios where an application acts on behalf of a user, as it does not involve user authentication or consent. It is strictly limited to scenarios where the client operates on its own behalf.

* **Client Authentication Methods**: The OAuth 2.0 specification outlines multiple methods for transmitting client credentials. These methods must be carefully selected and implemented to ensure the security of the authentication process.

:::warning
**Security Best Practices**
Implementing TLS (Transport Layer Security) is crucial to protect the transmission of client credentials. Storing the client secret securely and adhering to robust security measures for secret management are essential to prevent unauthorized access.
:::
