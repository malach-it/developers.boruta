# Service registry configuration | Security

Security parameters help __protect upstream connections and traffic volume__. They enable mutual TLS to the backend service and gateway-side rate limiting before requests are forwarded.

:::note Parameters sections
[Service registry](/docs/provider-configuration/configure-service-registry) upstreams can be customized through either the [Administration API](/api/list-upstreams), the user interface, or static configuration files. The configuration is organized around:

- [General configuration](/docs/provider-configuration/service-registry/general-configuration)
- [URIs](/docs/provider-configuration/service-registry/uris)
- [Authorization](/docs/provider-configuration/service-registry/authorization)
- __Security__
:::

## Security parameters

<div class="parameters">

__Mutual TLS__ makes the gateway use mutual TLS when connecting to the upstream. This option requires the upstream scheme to be `https`.

__Rate limiting__ applies request throttling before traffic is forwarded to the upstream.

__Request count__ defines how many requests are accepted during the selected time unit.

__Time unit__ defines the rate-limit window. Accepted values are `millisecond`, `second`, and `minute`.

__Penality (ms)__ defines the delay applied after the accepted request count is exceeded.

__Timeout (ms)__ defines the maximum throttling wait time before the request is rejected.

__Memory length__ defines how many recent rate-limit entries are kept in memory for the upstream.

</div>

## User interface

![upstream security](/assets/images/upstream-security.png)
