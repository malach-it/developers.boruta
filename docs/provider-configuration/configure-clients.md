# Clients configuration

Clients represent the applications that need to __get authorized access__ to a restricted HTTP service (Resource Server). Boruta helps them to __obtain tokens following OAuth 2.0 and OpenID Connect specifications__ so that they can present them to prove their access rights.

## Architecture

Each client is associated with an identity provider that helps to customize the authentication and user management features and pages. The later is connected to a backend to have access to user information.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [identity provider configuration](provider-configuration/configure-identity-providers.md)

> Have a look at [backend configuration](provider-configuration/configure-backends.md)

## Manage through User Interface

The Administration interface gives the ability to create, update and delete clients. Clients are listed through the clients section in the sidebar menu.

![client form](/assets/images/oauth-clients-list.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `clients:manage:all` granted.

> Have a look at [How to get restricted access](management-api#get-an-access-token)

> Have a look at the [API documentation](/api/list-clients)
