# Management API

boruta Administration is not only accessible through the UI, but also via API which helps server configuration automation. All confugrations are intended to be both accessible with the UI and the API, this opens the integration abilities up to provide Infrastructure as Code.

## Get an access token

You can use the OAuth flow of your preference to get an access token that would be used as a bearer for the further requests to the API. The access token would have the required scope to access part or all of the server configuration.

## Restricted access

The required scopes to manage the server are of the form `<resource>:<ability>:<data scope>` which scopes the access token to be resource oriented. If you need a finer access rules do not hesitate to reach out.

- `clients:manage:all` helps to manage [clients](provider-configuration/configure-clients)
- `identity-providers:manage:all` helps to manage [identity providers](provider-configuration/configure-identity-providers)
- `backends:manage:all` helps to manage [backends](provider-configuration/configure-backends)
- `users:manage:all` helps to manage users
- `scopes:manage:all` helps to manage [scopes](provider-configuration/configure-scopes)
- `roles:manage:all` helps to manage [roles](provider-configuration/configure-scopes)
- `upstreams:manage:all` helps to manage [upstreams](provider-configuration/configure-upstreams)
- `configuration:manage:all` helps to manage configuration (error page templates)
- `logs:read:all` helps to access business and request logs

## API documentation

> Have a look at [API documentation](/api/list-clients)
