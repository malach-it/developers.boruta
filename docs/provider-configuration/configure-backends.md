# Backends configuration

Backends act as __user registries__ storing user related information for a better management. They use a configurable __identity source__ to keep identities safe but accessible for a better management. On top of that it gives __enhanced abilities__ to those users like custom attributes or email confirmation.

## Architecture

For __each client__ you can configure a specific __identity provider__, that will be associated to a __backend__, helping to __provide both authorization and authentication__ for them. This way, each client will have a custom interface as mean of authentication for the end-users.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [client configuration](/docs/provider-configuration/configure-clients.md)

> Have a look at [identity provider configuration](/docs/provider-configuration/configure-identity-providers.md)

## Configuration

Backends configuration helps to __select associated user registries__, means of credential storage along with __enhanced features__ for them. Those are to keep credentials and identities while providing them abilities helping manage authorization and authentication provided by [identity provider](/docs/provider-configuration/configure-identity-providers) interfaces.

## Manage through User Interface

The Administration interface gives the ability to create, update and delete backends. Backends are listed through the `Identity providers > backend list` section in the sidebar menu.

![backend view](/assets/images/backends-list.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `backends:manage:all` granted.

> Have a look at the [TODO - API documentation](/api/list-scopes)

## Navigation

- Top level configuration - [General configuration](/docs/provider-configuration/backends/general-configuration)
- Backend type - [Type](/docs/provider-configuration/backends/type)
- Sending emails - [Email configuration](/docs/provider-configuration/backends/email-configuration)
- Federating identities - [Identity federation](/docs/provider-configuration/backends/identity-federation)
- Issuing / Verifying Verifiable Credentials - [Verifiable credentials](/docs/provider-configuration/backends/verifiable-credentials)
- Custom user attributes - [User metadata](/docs/provider-configuration/backends/user-metadata)
