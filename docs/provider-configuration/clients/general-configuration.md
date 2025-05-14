# Clients configuration

Client attributes help __manage the authorization capabilities for OAuth 2.0 and satellites flows__. They provide a high level of customization helping the server to be integrated within infrastructures seamlessly. Those configuration help the flows to be both business and technically adapted for the addressed use case.

:::note Parameters sections
[OAuth clients](/docs/provider-configuration/configure-clients) can be customized through either the [Administration API](/docs/provider-configuration/management-api) or the user interface providing 4 __categories of settings__:

- __General configuration__
- Authentication
- Security
- Grant types
:::

## General configuration parameters

>  __Id__ would be the identifier of the client, it will be used as the OAuth `client_id` parameter. Note that once the client is created this value can't be changed.

>  __Secret__ would be used as the `client_secret` parameter in OAuth flows.

>  __Name__ would be accessible in the consent template to highlight for which client the resource owner delegates access to the requested scopes

>  __Access token TTL__ would be the access tokens time to live.

>  __Authorization code TTL__ would be the time to live of codes during authorization code grant.

>  __Refresh token TTL__ would be the time to live of refresh tokens helping to obtain newly generated access tokens.

>  __Id token TTL__ would be the time to live of ID tokens expressed in `exp` JWT claim.

>  __Authorization request TTL__ would be the time to live of the requests as described in [RFC 9126 - OAuth 2.0 Pushed Authorization Requests](https://datatracker.ietf.org/doc/html/rfc9126).

>  __Redirect URIs__ would be the allowed redirect URIs in OAuth / OpenID Connect flows.

>  __Response mode__ enables to determine if Verifiables Credentials issuance and presentation deeplinks are redirections (same device) or displayed within an interface:
> - __direct_post__ the user is redirected with an HTTP 302
> - __post__ a QR code and a link is displayed to the user

## User interface
![client form](/assets/images/oauth-clients-general-configuration.png)
