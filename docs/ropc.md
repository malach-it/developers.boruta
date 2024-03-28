
:::info
Please refer to [the authentication framework overview page](/auth-framework-overview.md) for a more general approach of how authentication works.
:::

---

## Description

The Resource Owner Password Credential (ROPC) flow is one of the standard flows defined in [OAuth2](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.3).

The Resource Owner Password Credentials Grant (ROPC) allows a client application to directly request an access token from the authorization server **using the resource owner's username and password.**

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

     +----------+
     | Resource |
     |  Owner   |
     |          |
     +----------+
          v
          |    Resource Owner
         (A) Password Credentials
          |
          v
     +---------+                                  +---------------+
     |         |>--(B)---- Resource Owner ------->|               |
     |         |         Password Credentials     | Authorization |
     | Client  |                                  |     Server    |
     |         |<--(C)---- Access Token ---------<|               |
     |         |    (w/ Optional Refresh Token)   |               |
     +---------+                                  +---------------+

    *Figure 1: Resource Owner Password Credentials Flow. Source: IETF(https://datatracker.ietf.org/doc/html/rfc6749#section-4.3)*

---

## Limits and constraints

While ROPC provides a straightforward authentication mechanism, it introduces several limitations and security concerns, including:

* **Security Risks**: Exposing user credentials to the client application increases the risk of phishing and other forms of credential theft. It is contrary to the broader goals of OAuth 2.0, which aims to avoid sharing passwords with third parties.

* **Limited Use**: Suitable only in scenarios where the client is highly trusted, such as internal or legacy applications. It is not recommended for third-party or public client applications.

* **Lack of Single Sign-On (SSO)**: The direct handling of usernames and passwords by the client application means that ROPC cannot leverage SSO capabilities, reducing user convenience and security.

* **Deprecation Considerations**: The security community and industry best practices generally discourage ROPC's use in new projects. There's a movement towards more secure and interactive authorization flows that provide better user experience and security guarantees.

---

:::warning
**Security Best Practices**
If ROPC must be used, it's imperative to secure the application using HTTPS to encrypt the credentials in transit and implement robust security measures to protect stored credentials. Regularly reviewing and updating these practices is needed to maintain the security and integrity of the system.
:::

---

## How to integrate this flow

### Step 1: Requesting Access Token

**Description** 

In the ROPC flow, the client directly requests an access token from the authorization server by submitting the resource owner's credentials (username and password) along with its own client credentials.

**Configuration**

* **Token Endpoint URL**: Identify the URL of the authorization server's token endpoint where the access token request will be sent.

* **Resource Owner Credentials**: The username and password of the resource owner. These credentials must be handled with care to avoid security risks.

* **Client Credentials**: The client ID and, optionally, the client secret, if required by the authorization server for client authentication.

* **Scope**: (Optional) Define the scope of the access request. This parameter specifies the level of access the client is requesting.
Learn more about how to configure scopes on [this page](https://developers.boruta.patatoid.fr/docs/provider-configuration/configure-scopes).

**Result**

The client sends a POST request to the authorization server's token endpoint with the necessary credentials and requested scope. 
The request format typically looks like this:

```
POST <token_endpoint>
Content-Type: application/x-www-form-urlencoded

grant_type=password&username=<resource_owner_username>&password=<resource_owner_password>&client_id=<client_id>&client_secret=<client_secret>&scope=<scope>
```
---

### Step 2: Receiving the Access Token

**Description**

If the authorization server successfully authenticates the client and the resource owner, and the request is valid, it issues an access token to the client.

**Configuration**

* No explicit configuration by the client: The structure of the response is determined by the authorization server, based on the success of the client and resource owner authentication.

**Result**

The authorization server responds with a JSON object containing the access token and additional information, such as the token type, expiration time, and scope. The response looks something like this:

```json

{
  "access_token": "<access_token>",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "<scope>"
}
```
---

### Step 3: Accessing Protected Resources

**Description**

With the access token, the client can now make authenticated requests to the resource server on behalf of the resource owner to access protected resources.

**Configuration**

* **Use of Access Token**: The client includes the access token in the Authorization header of its requests to the resource server.

**Result**

The resource server validates the access token, and if it is valid, it processes the request. The client accesses protected resources by including the access token in the HTTP header as follows:

```
GET <resource_endpoint>
Authorization: Bearer <access_token>
```
