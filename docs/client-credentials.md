
:::info
Please refer to [the authentication framework overview page](/auth-framework-overview.md) for a more general approach of how authentication works.
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


     +---------+                                  +---------------+
     |         |                                  |               |
     |         |>--(A)- Client Authentication --->| Authorization |
     | Client  |                                  |     Server    |
     |         |<--(B)---- Access Token ---------<|               |
     |         |                                  |               |
     +---------+                                  +---------------+

    *Figure 1: Client Credentials Flow. Source: [IETF](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4)*

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

---

:::warning
**Security Best Practices**
Implementing TLS (Transport Layer Security) is crucial to protect the transmission of client credentials. Storing the client secret securely and adhering to robust security measures for secret management are essential to prevent unauthorized access.
:::

---

## How to integrate this flow

### Step A: Access Token Request

**Description**

The client requests an access token from the authorization server by authenticating with its client credentials (client ID and client secret) and specifying the desired scope for the access token. This step involves sending a POST request to the token endpoint of the authorization server.

**Configuration**

* **Token Endpoint URL**: Identify the URL of the authorization server's token endpoint where the client will send its request.

* **Client Credentials**: The client ID and client secret provided by the authorization server when the client was registered. These credentials authenticate the client to the server.

* **Scope**: (Optional) Specify the scope of the access request, which defines the resources the client wants to access. Not all implementations require a scope.
Learn more about how to configure scopes on [this page](https://developers.boruta.patatoid.fr/docs/provider-configuration/configure-scopes).

**Result**

The client constructs and sends a request for an access token to the authorization server's token endpoint. This is done using a POST request with the client credentials in the Authorization header or body, depending on the server's requirements. The request looks like this:

```
POST <token_endpoint>
Authorization: Basic <encoded_client_credentials>
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&scope=<scope>
```
---

### Step 2: Access Token Response

**Description**

If the access token request is valid and the client is authenticated successfully, the authorization server issues an access token to the client. The response includes the access token, its type, expiration time, and optionally, the scope of the access token if it is narrower than the scope requested.

**Configuration**

* No explicit configuration by the client: The response structure and content are determined by the authorization server based on the successful authentication of the client and the validity of the request.

**Result**

The authorization server responds with a JSON payload containing the access token and other relevant information. 
The response from the server looks like this:

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

With the access token, the client can make requests to the resource server to access protected resources. 
The access token is included in the HTTP headers of the request.

**Configuration**

* **Use of Access Token**: The client includes the access token in the Authorization header when making requests to the resource server.

**Result**

The resource server validates the access token and, if valid, processes the client's request. The client accesses protected resources by including the access token in the HTTP header like so:

```
GET <resource_endpoint>
Authorization: Bearer <access_token>
```