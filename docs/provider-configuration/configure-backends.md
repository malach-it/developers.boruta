# Backends configuration

Backends act as user registries storing user related information for a better management. They use a configurable identity source to keep identities safe but accessible for a better management.

## Architecture

Each identity provider is associated with a backend that helps to get user information for their authentication and identity management.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [client configuration](provider-configuration/configure-clients.md)

> Have a look at [identity provider configuration](provider-configuration/configure-identity-providers.md)

## Configuration

Configuration helps to connect to user registries, credential storage along with enhanced features for them.

### Internal backend

User credentials can be stored internally, in instance connected database. Those users are scoped by backend having an applicative silot (but not hard). For them, you can select the used **hashing algorithm**:
- argon2
- bcrypt
- pbkdf2

For each of those, you have a low level configuration in order to fit the best your use case, for example if you have to manage user import.

> If none of the hashing algorithms suit your use case, you can leave [an issue](https://github.com/malach-it/boruta-server/issues) for us to consider implementing it.

### LDAP backend

You can also configure a pool of connection to a LDAP server setting the configuration, up to user edition providing the master password if you need to.

### SMTP client

boruta users are enhanced with features like email confirmation or password reset. In order to send the according emails, you can configure a connection to an SMTP server for it to send the needed emails.

## Manage through User Interface

The Administration interface gives the ability to create, update and delete backends. All backend attributes are accessible via the captured form below. All these operations can be managed in the "Identity providers > list backends" section in the sidebar menu.

![client form](/assets/images/backend-form.png)

## Manage through API

All backend operations are accessible through a REST API following the below description. All backend management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `backends:manage:all` granted.

> Have a look at [How to get restricted access](management-api#get-an-access-token)

> Have a look at [API documentation](/api/list-backends)

