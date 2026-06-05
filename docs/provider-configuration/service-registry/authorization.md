# Service registry configuration | Authorization

Authorization parameters help __protect upstream routes__ before traffic reaches the backend service. They define the access-token requirement, the required OAuth scopes, and the forwarded identity context sent to the upstream.

:::note Parameters sections
[Service registry](/docs/provider-configuration/configure-service-registry) upstreams can be customized through either the [Administration API](/api/list-upstreams), the user interface, or static configuration files. The configuration is organized around:

- [General configuration](/docs/provider-configuration/service-registry/general-configuration)
- [URIs](/docs/provider-configuration/service-registry/uris)
- __Authorization__
- [Security](/docs/provider-configuration/service-registry/security)
:::

## Authorization parameters

<div class="parameters">

__Authorize__ requires requests to provide a valid OAuth access token before they are forwarded.

__Required scopes__ restrict authorized traffic by HTTP method. Keys can be HTTP methods such as `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`, or `*` for the default rule. Values are the OAuth scopes required for the method.

__Error content type__ defines the content type returned for gateway authorization errors.

__Forbidden response__ customizes the response returned when the access token is valid but does not contain the required scopes.

__Unauthorized response__ customizes the response returned when the request has no valid access token.

__Forwarded token signature algorithm__ enables boruta to send backend request context in the `X-Forwarded-Authorization` header. Supported algorithms are `HS256`, `HS384`, `HS512`, `RS256`, `RS384`, and `RS512`.

__Forwarded token secret__ signs forwarded tokens when using an `HS*` algorithm. Leave it empty to let boruta generate one.

__Forwarded token private key__ signs forwarded tokens when using an `RS*` algorithm. Leave it empty to let boruta generate a key pair.

__Forwarded token public key__ is the public key matching the generated or configured private key.

</div>

## User interface

![upstream authorization](/assets/images/upstream-authorization.png)
