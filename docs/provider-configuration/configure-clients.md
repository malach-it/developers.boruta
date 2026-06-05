# Clients configuration

Clients represent the applications that need to __get authorized access__ to a restricted HTTP service (Resource Server). Boruta helps them to __obtain tokens following OAuth 2.0 and OpenID Connect specifications__ so that they can present them to prove their access rights.

## Architecture

For __each client__ you can configure a specific __identity provider__, that will be associated to a __backend__, helping to __provide both authorization and authentication__ for them. This way, each client will have a custom interface as mean of authentication for the end-users.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [identity provider configuration](provider-configuration/configure-identity-providers.md)

> Have a look at [backend configuration](provider-configuration/configure-backends.md)

## Manage through User Interface

The Administration interface gives the ability to create, update and delete clients. Clients are listed through the `Clients > client list` section in the sidebar menu.

![client view](/assets/images/oauth-clients-list.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `clients:manage:all` granted.

> Have a look at the [API documentation](/api/list-clients)

## Static configuration

Clients can be loaded from static configuration files with the `client` section. Use `identity_provider.id` to bind a client to an identity provider.

```yaml
---
version: "1.0"
configuration:
  client:
    - id: "00000000-0000-0000-0000-000000000003"
      name: "Example client"
      secret: "secret"
      confidential: true
      public_client_id: "https://client.example.com"
      check_public_client_id: true
      identity_provider:
        id: "00000000-0000-0000-0000-000000000002"
      redirect_uris:
        - "https://client.example.com/callback"
      authorized_resources:
        - "https://api.example.com"
      authorized_scopes:
        - name: "profile"
      supported_grant_types:
        - "authorization_code"
        - "client_credentials"
        - "refresh_token"
      token_endpoint_auth_methods:
        - "client_secret_basic"
      authorize_scope: true
      pkce: true
      public_refresh_token: false
      public_revoke: false
      enforce_dpop: false
      enforce_tx_code: false
      access_token_ttl: 3600
      refresh_token_ttl: 86400
      authorization_code_ttl: 60
      authorization_request_ttl: 600
      id_token_ttl: 3600
      id_token_signature_alg: "HS256"
      token_endpoint_jwt_auth_alg: "HS256"
      userinfo_signed_response_alg: "HS256"
      jwks_uri: "https://client.example.com/.well-known/jwks.json"
      id_token_kid: "client-key"
      logo_uri: "https://client.example.com/logo.png"
      response_mode: "post"
      metadata:
        application_type: "web"
```

> Have a look at [configuration files](/docs/provider-configuration/configuration-files#client)

## Navigation

1. Top level configuration - [General configuration](provider-configuration/clients/general-configuration.md)
2. Client and end-user authentication - [Authentication](provider-configuration/clients/authentication.md)
3. Securing the flows - [Security](provider-configuration/clients/security.md)
4. Restricting the flows - [Grant types](provider-configuration/clients/grant-types.md)
