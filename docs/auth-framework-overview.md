
## Context

The [OAuth 2.0 authorization framework](https://datatracker.ietf.org/doc/html/rfc6749) was officially published as RFC 6749 in October 2012 by the Internet Engineering Task Force (IETF). 

The primary goal of this authorization framework was to provide a **secure** and **standardized** way for applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, or Google. It was designed to work on the web but has since been adapted for application use.

> This protocol enables users to grant third-party access to their web resources without sharing their passwords, thus enhancing security and convenience. 

OAuth 2.0 streamlined the process over its predecessor, OAuth 1.0, by simplifying the client-side scripting and offering multiple flows to cater to various application scenarios, from web applications running on a server to native mobile apps and desktop applications.

---

## Why the OAuth 2.0?

The OAuth 2.0 standard revolutionizes the traditional client-server authentication model by **establishing an authorization layer** that separates the client's role from the resource owner's.

It addresses the risks and constraints of sharing the resource owner's credentials with third-party applications, such as storing passwords in clear text and granting unfettered access to protected resources.

With OAuth, resource owners can **authorize third-party clients to access their resources without sharing their credentials**. 

Access tokens, which denote specific permissions, duration, and other attributes, are granted by an authorization server upon resource owner's approval. These tokens, distinct from the resource owner's credentials, mitigate the risk of data compromise due to third-party application breaches.

---

## Key Roles in OAuth 2.0

The OAuth 2.0 relies on key roles:

- **The resource owner**: Typically the end-user, the resource owner is capable of granting permission to access their resources hosted by the resource server.

- **The client** is the application or service that desires to access the resource owner's data. This client could be a website, a mobile application, or a server-side application.

- **The Authorization Server (AS)** is the trusted entity that verifies the identity of the resource owner and issues access tokens after successful authentication.

- **The Resource Server (RS)** is the server that hosts the protected resources and accepts or denies requests from a client based on the access token presented.

---

## OAuth 2.0 Authorization flow

![OAuth 2.0 authentication framework overview](/static/assets/images/authz-global.png "OAuth 2.0 authentication framework overview")

### 1. Authorization Grant

The process begins with the client requesting authorization from the resource owner.
This request can happen in various ways, depending on the type of authorization grant the client uses—such as an [authorization code](/code-grant.md), [implicit grant](/implicit-grant.md), [resource owner credentials](/ropc.md), or a [client credentials grant](/client-credentials.md).

### 2. Access Token Issuance

Once the authorization server validates the resource owner's credentials and the client's authorization request, it issues an access token. This token is a string that represents the authorization granted to the client. The token includes information about the scope of access granted and the duration of the token's validity.

### 3. Resource Access

The client presents the access token to the resource server when making requests for the protected resources. The access token acts like a key that unlocks access. However, it is restricted based on the permissions granted by the resource owner.

### 4. Access Token Validation

Before the resource server fulfills the request, it needs to validate the access token with the authorization server. This validation ensures that the token is valid, has not expired, and grants permission for the requested action.

### Refresh Tokens

OAuth 2.0 also supports the use of refresh tokens. These tokens are issued by the authorization server and can be used by the client to obtain new access tokens. This is particularly useful for clients that need long-lived access to a resource server without forcing the resource owner to re-authenticate frequently.

---

## Considerations for Security

OAuth 2.0 relies on **secure transmission of access tokens and other sensitive information over HTTPS**.

The framework itself is built on trust: the resource owner trusts the authorization server to authenticate their identity securely, and the client and resource server trusts the authorization server to issue valid tokens.
