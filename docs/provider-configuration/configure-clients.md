# Clients configuration

Clients represent the applications that need to __get authorized access__ to a restricted HTTP service (Resource Server). Boruta helps them to __obtain tokens following OAuth 2.0 and OpenID Connect specifications__ so that they can present them to prove their access rights.

## Architecture

Each client is associated with an identity provider that helps to customize the authentication and user management features and pages. The later is connected to a backend to have access to user information.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [identity provider configuration](provider-configuration/configure-identity-providers.md)

> Have a look at [backend configuration](provider-configuration/configure-backends.md)

## Configuration

Client attributes help manage the authorization capabilities during OAuth / OpenID Connect flows.

* `id` would be the identifier of the client, it will be used as the OAuth `client_id` parameter. Note that once the client is created this value can't be changed.
* `secret` would be used as the `client_secret` parameter in OAuth flows.
* `name` would be accessible in the consent template to highlight for which client the resource owner delegates access to the requested scopes
* `access_token_ttl` would be the access tokens time to live.
* `authorization_code_ttl` would be the time to live of codes during authorization code grant.
* `refresh_token_ttl` would be the time to live of refresh tokens helping to obtain newly generated access tokens.
* `id_token_ttl` would be the time to live of ID tokens expressed in `exp` JWT claim.
* `redirect_uris` would be the allowed redirect URIs in OAuth / OpenID Connect flows.
* `authorize_scope` would determine if the client defines the specific public and private scopes to be authorized.
* `authorized_scopes` would be the list of scopes that can be granted with this client.
* `supported_grant_types` would be the grant types that are allowed to be used using this client.
* `pkce` would determine if PKCE flow is enforced using this client.
* `public_refresh_token` allow refreshing tokens without providing a `client_secret`
* `public_revoke` allow to revoke tokens without providing a `client_secret`
* `confidential` define if the client is set to be confidential as stated in OAuth 2.0 specification (see above)

## Client confidentiality

The access to most of the OAuth and OpenID Connect provider endpoints is protected by providing a couple `client_id` / `client_secret` aiming to identify the client that performs the request. This authentication follows the Basic Authorization or can be provided as body parameters. As stated in OAuth 2.0 RFC, the server gives the ability to set clients as confidential requesting the client secret in more cases. Rules of requesting client credentials acts as follow:

* **Client Credentials** - always enforces check of the client's secret
* **Authorization Code Grant** - enforces check of client secret only for confidential clients on access token request, does not check client secret during the authorization phase
* **Hybrid Flow** - has the same behavior as the authorization code grant
* **Implicit Grant** - does not check the client's secret
* **Resource Owner Password Credentials** - enforces check of client secret only for confidential clients
* **Refresh Token** - always enforces check of client secret, `public_refresh_token` overrides the confidentiality
* **Introspect** - always enforces check of the client's secret
* **Revoke** - always enforces check of client secret, `public_revoke` overrides the confidentiality

## Manage through User Interface

The Administration interface gives the ability to create, update and delete clients. All client attributes are accessible via the captured form below. All these operations can be managed in the "Clients" section in the sidebar menu.

![client form](/assets/images/client-form.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `clients:manage:all` granted.

> Have a look at [How to get restricted access](management-api#get-an-access-token)

> Have a look at [API documentation](/api/list-clients)
