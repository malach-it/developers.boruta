# Service registry configuration | General configuration

Upstream attributes help __manage gateway routing and protection rules__ for services registered behind boruta. They define where a request is forwarded, which public paths expose the service, and which security rules the gateway applies before proxying traffic.

:::note Parameters sections
[Service registry](/docs/provider-configuration/configure-service-registry) upstreams can be customized through either the [Administration API](/api/list-upstreams), the user interface, or static configuration files. The configuration is organized around:

- __General configuration__
- [URIs](/docs/provider-configuration/service-registry/uris)
- [Authorization](/docs/provider-configuration/service-registry/authorization)
- [Security](/docs/provider-configuration/service-registry/security)
:::

## General configuration parameters

<div class="parameters">

__Node__ defines where the upstream is active. `global` upstreams are used by the main gateway entrypoint. A service registry node name makes the upstream active for the matching sidecar or microgateway node.

__Virtual host__ restricts matching to requests received for a specific host. Leave it empty to match any host. When both a virtual-host upstream and a path-only upstream can match, the virtual-host upstream is selected first.

__Scheme__ defines the protocol used to reach the upstream service. Accepted values are `http` and `https`.

__Host__ is the network host of the upstream service.

__Port__ is the network port of the upstream service.

</div>

## User interface

The general configuration tab defines where the upstream is active and which backend service the gateway forwards traffic to.

![upstream general configuration](/assets/images/upstream-general-configuration.png)
