# OAuth 2.0 framework overview

## Context

The [OAuth 2.0 authorization framework](https://datatracker.ietf.org/doc/html/rfc6749) was officially published as RFC 6749 in October 2012 by the Internet Engineering Task Force (IETF).

The primary goal of this authorization framework was to provide a **secure** and **standardized** way for applications to obtain limited access to user accounts on an HTTP service, such as Facebook, GitHub, or Google. It was designed to work on the web but has since been adapted for application use. Major platforms have implemented this specification by providing users with "Log in with" buttons, simplifying the authentication process.

> This protocol enables users to grant third-party access to their web resources without sharing their passwords, thus enhancing security and convenience.

OAuth 2.0 streamlined the process over its predecessor, OAuth 1.0, by simplifying the client-side scripting and offering multiple flows to cater to various application scenarios, from web applications running on a server to native mobile apps and desktop applications.

:::info
Discover our blog article ["boruta meets Self-Sovereign Identity as a Verifiable Credential issuer"](https://medium.com/@io.pascal.knoth/boruta-meets-self-sovereign-identity-as-a-verifiable-credential-issuer-479f2ffa5f4e) on Medium to learn more.
:::

---

## Why the OAuth 2.0?

The OAuth 2.0 standard revolutionizes the traditional client-server authentication model by **establishing an authorization layer** that separates the client's role from the resource owner's.

It addresses the risks and constraints of sharing the resource owner's credentials with third-party applications, such as storing passwords in clear text and granting unfettered access to protected resources.

With OAuth, resource owners can **authorize third-party clients to access their resources without sharing their credentials**.

Access tokens, which denote specific permissions, duration, and other attributes, are granted by an authorization server upon resource owner's approval. These tokens, distinct from the resource owner's credentials, mitigate the risk of data compromise due to third-party application breaches.

---

## Key Roles in OAuth 2.0

The OAuth 2.0 relies on key roles:

- **The Authorization Server (AS)** is the trusted entity that verifies the identity of the resource owner and issues access tokens after successful authentication.

- **The client** is the application or service that desires to access the resource owner's data. This client could be a website, a mobile application, or a server-side application.

- **The resource owner**: Typically the end-user, the resource owner is capable of granting permission to access their resources hosted by the resource server.

- **The Resource Server (RS)** is the server that hosts the protected resources and accepts or denies requests from a client based on the access token presented.

---

## OAuth 2.0 Authorization framework

<div class="centered"><img src="/assets/images/authz-global.png" alt="OAuth 2.0 authentication framework overview" /></div>

The Oauth 2.0 Authorization framework defines a three legged architecture to provide a secure way for the clients to obtain credentials targeting to access resources located on an HTTP service. All the flows described can be split in three major steps implementing better security for the web applications.

### 1. Access Token Issuance

Here, the client representing a resource owner or the service itself can obtain an Access Token (AT) that defines its ability to access resources, often hosted on an API. This process is based on credential presentation in order to identify the person or the machine. It permits to the Authorization Server (AS) to give according capabilities using the information stored in a registry, the identity provider.

### 2. Resource Access

The client presents the already obtained Access Token to the Resource Server (RS) while performing requests to access protected resources. The Access Token acts like a key that contains access information.

### 3. Access Token Validation

To respond to the client request, the HTTP service needs to validate the Access Token to apply the restriction it made on its protected resources. This validation is performed on three levels: ensuring token validity, checking the permissions to request the resource at a feature level but also on data level applying role and/or attribute based access control.

