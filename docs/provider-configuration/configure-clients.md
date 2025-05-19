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

## Navigation

1. Top level configuration - [General configuration](provider-configuration/clients/general-configuration.md)
2. Client and end-user authentication - [Authentication](provider-configuration/clients/authentication.md)
3. Securing the flows - [Security](provider-configuration/clients/security.md)
4. Restricting the flows - [Grant types](provider-configuration/clients/grant-types.md)
