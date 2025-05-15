# Clients configuration

Client attributes help __manage the authorization capabilities for OAuth 2.0 and satellites flows__. They provide a high level of customization helping the server to be integrated within infrastructures seamlessly. Those configuration help the flows to be both business and technically adapted for the addressed use case.

:::note Parameters sections
[OAuth clients](/docs/provider-configuration/configure-clients) can be customized through either the [Administration API](/api/list-clients) or the user interface providing 4 __categories of settings__:

- General configuration
- __Authentication__
- Security
- Grant types
:::

## Authentication parameters

### OAuth Client authentication

<div class="parameters">

 __Client authentication methods__ enables to select the client supported authentication methods:

- __client_secret_basic__ uses HTTP basic to authenticate the client provided the `client_id` and the `client_secret`
- __client_secret_post__ uses HTTP POST method to authenticate the client provided the `client_id` and the `client_secret`
- __client_secret_jwt__ parses the request JWT that is to be signed using a symetric algorithm given the `client_secret`
- __client_private_key__ parses the request JWT that is to be signed using an asymetric algorithm given the provided public key


 __Client JWT authentication signature algorithm__ gives ways to select the used client JWT signature algorithm. Have to be symetric for `client_secret_jwt` and asymetric for `client_private_key`.

 __Confidential__ define if the client is set to be confidential as stated in OAuth 2.0 specification.

</div>

:::note Client confidentiality
The access to most of the OAuth and OpenID Connect provider endpoints is protected by providing a couple `client_id` / `client_secret` aiming to identify the client that performs the request. As stated in [OAuth 2.0](https://tools.ietf.org/html/rfc6749), the server gives the ability to set clients as confidential requesting the client secret in more cases. Rules of requesting client credentials acts as follow:

- __Client Credentials__ - always enforces check of the client's secret
- __Authorization Code Grant__ - enforces check of client secret only for confidential clients on access token request, does not check client secret during the authorization phase
- __Hybrid Flow__ - has the same behavior as the authorization code grant
- __Implicit Grant__ - does not check the client's secret
- __Resource Owner Password Credentials__ - enforces check of client secret only for confidential clients
- __Refresh Token__ - always enforces check of client secret, `public_refresh_token` overrides the confidentiality
- __Introspect__ - always enforces check of the client's secret
- __Revoke__ - always enforces check of client secret, `public_revoke` overrides the confidentiality
:::

### User authentication

<div class="parameters">

__identity provider__ enables to select the means of authentication for the users provided by an [Identity Provider](/docs/provider-configuration/configure-identity-providers)

</div>

## User interface
![client form](/assets/images/oauth-clients-authentication.png)
