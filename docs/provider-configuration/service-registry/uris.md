# Service registry configuration | URIs

Upstream URIs define the __public path prefixes__ exposed by the gateway. They are used to select the upstream receiving a request and to decide whether the matched prefix is kept or removed before forwarding.

:::note Parameters sections
[Service registry](/docs/provider-configuration/configure-service-registry) upstreams can be customized through either the [Administration API](/api/list-upstreams), the user interface, or static configuration files. The configuration is organized around:

- [General configuration](/docs/provider-configuration/service-registry/general-configuration)
- __URIs__
- [Authorization](/docs/provider-configuration/service-registry/authorization)
- [Security](/docs/provider-configuration/service-registry/security)
:::

## URIs parameters

<div class="parameters">

__uris__ are the public path prefixes exposed by the gateway. The gateway matches requests by path prefix and gives priority to the longest matching URI, making it possible to define broad and specific routes on the same gateway.

__strip_uri__ removes the matched URI prefix before forwarding the request to the upstream service. For example, with `/api` configured as URI, a request to `/api/users` is forwarded as `/users` when strip URI is enabled.

</div>

## User interface

![upstream URIs](/assets/images/upstream-uris.png)
