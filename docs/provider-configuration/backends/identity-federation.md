# Backends configuration | Identity federation

Backends parameters help to __manage identity storage and associated features__ within the server. Those are to keep credentials and identities while providing them abilities helping to manage authorization and authentication provided by identity provider interfaces.

:::note Parameters sections
[Backends](/docs/provider-configuration/configure-backends) can be customized through either the Administration API or the user interface providing 6 __categories of settings__:

- General configuration
- Type
- Email configuration
- __Identity federation__
- Verifiable credentials
- User metadata
:::

## Identity federation parameters

<div class="parameters">

__Add federated server__ adds a federated server configuration to the current backend, helping to enable identity federation, using remote authentication methods, with it which can be materialized by a ["login with" button](/docs/provider-configuration/configure-identity-providers#global-templates-variables).

:::note federated server configuration

You'll need to fill the `redirect_uri` on the federated server client configuration `${BORUTA_OAUTH_HOST}/accounts/backends/:backend_id/:federated_server_name/callback`

:::

### Federated server

__Server name__ help to recognize the configured remote authentication server within the administration interface.

__Client ID__ is the configured `client_id` on the remote authentication server OAuth client configuration.

__Client secret__ is the configured `client_secret` on the remote authentication server OAuth client configuration.

__Base URL__ is the base URL used for the interactions with the remote authentication server.

__scope (separated with a whitespace)__ are the scopes that are used in the authorization code grant flow authenticating with the remote server.

__Add Federated metadata__ metadata endpoint configuration that help to fetch protected resources using the granted access token.
- __Metadata endpoint URL__ is the URL where to fetch the user metadata
- __Metadata endpoint claims (separated with a whitespace)__ is the list of the jsonpaths used to retreive user metadata. You can use the token `:all` to select all current node claims.

__Use OpenID discovery__ define if OpenID discovery is used to fetch server configuration (endpoints)

:::note paths

All remote authentication server configuration endpoints can be expressed with either a path relative to the Base URL or with a full URL.

:::
### Discovery endpoints

__Discovery path__ the OpenID discovery path used to fetch server configuration. Configuration is fetched while persisting the backend configuration.

### OpenID endpoints

__Userinfo path__ the OpenID Userinfo path used to fetch user information.

__Authorize path__ the OAuth 2.0 authorize path used to authenticate the current user.

__Token path__ the OAuth 2.0 token path used to fetch an `access_token` given an authorization `code`.

</div>

## User interface

![backend form](/assets/images/backends-identity-federation.png)
