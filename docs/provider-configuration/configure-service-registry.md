# Service registry configuration

:::note experimental feature

Note that the gateway is experimental and might not be fully functional for production yet.

:::

boruta can work __as a cluster__, providing instances of an identity platform to __secure infrastructures__. Each running node publishes a service registry record describing how it can be reached and which gateway services it exposes.

## Service registry

At startup, a node ensures the cluster root CA exists, creates or updates its own registry record, and marks it as `online`. The record contains the `node_name`, Erlang node name, IP address, aliases, node certificate, exposed service configuration, and status. A registry record is unique by `node_name`; when a node starts again with the same `node_name`, it updates the existing record.

The IP address is selected from the first non-loopback network interface, falling back to `127.0.0.1` when no non-loopback address is available. Aliases come from static configuration and are completed with the node hostname. Records are visible in the administration interface within the `Upstreams > service registry` section.

The registry is refreshed through database notifications and periodic checks. Every node touches its own record every 5 seconds and tries to reach other registered Erlang nodes. A node that cannot be reached for about 30 seconds is removed from the registry. When a node stops normally, its record is marked `offline`.

:::note global entry

The `global` entry displayed in the administration interface is a gateway configuration helper, not a stored service registry record. It is used to manage upstreams that are served by the main gateway entrypoint.

:::

![service registry administration](/assets/images/service-registry-upstreams.png)

## Upstreams

Upstreams define how gateway requests are __forwarded__ to backend services. They are grouped by `node_name`.

`global` upstreams are used by the main gateway. Upstreams attached to a service registry node are used by that node's sidecar gateway. This lets the same administration view configure both central gateway routes and microgateway routes close to registered services.

## Microgateway / Sidecars

__More than a single gateway__, boruta can act as a microgateway. A node publishes both central gateway services and sidecar gateway services in its service registry configuration. The administration interface shows each configured service with its scheme, port, acceptor count, enabled state, and client-certificate verification setting when applicable.

The active upstream node is selected with the `node_name` attribute. `gateway` static configuration creates `global` upstreams. `microgateway` static configuration creates upstreams for a specific node, defaulting to the current node name when `node_name` is omitted.

The main HTTP and HTTPS gateway ports are configured with `BORUTA_GATEWAY_PORT` and `BORUTA_GATEWAY_HTTPS_PORT`. The HTTP and HTTPS sidecar gateway ports are configured with `BORUTA_GATEWAY_SIDECAR_PORT` and `BORUTA_GATEWAY_SIDECAR_HTTPS_PORT`.

![microgateways](/assets/images/boruta-microgateway.png)

## Static configuration

Upstreams can also be loaded from configuration files. `gateway` entries create `global` upstreams, while `microgateway` entries target a service registry node. A top-level `node_name` identifies the current node and `aliases` add extra names used by the service registry alongside the node hostname.

```yaml
---
version: "1.0"
configuration:
  node_name: "orders-node"
  aliases: ["orders.internal"]
  cluster_ca:
    certificate: |
      -----BEGIN CERTIFICATE-----
      [...]
      -----END CERTIFICATE-----
    private_key: |
      -----BEGIN PRIVATE KEY-----
      [...]
      -----END PRIVATE KEY-----
  gateway:
    - authorize: true
      virtual_host: "api.example.com"
      scheme: "https"
      host: "api.example.com"
      port: 443
      uris: ["/api"]
      strip_uri: true
      required_scopes:
        GET: ["api:read"]
        POST: ["api:write"]
      forwarded_token_signature_alg: "HS256"
      forwarded_token_secret: "secret"
      error_content_type: "application/json"
      unauthorized_response: |
        {"error":"unauthorized"}
      forbidden_response: |
        {"error":"forbidden"}
      rate_limit_enabled: true
      rate_limit_count: 100
      rate_limit_time_unit: "minute"
      rate_limit_penality: 500
      rate_limit_timeout: 5000
      rate_limit_memory_length: 50
  microgateway:
    - node_name: "orders-node"
      authorize: true
      scheme: "https"
      host: "orders.internal"
      port: 8443
      uris: ["/orders"]
      strip_uri: true
      mtls_enabled: true
      required_scopes:
        GET: ["orders:read"]
        POST: ["orders:write"]
```

`cluster_ca` can also be provided to configure the service registry root certificate authority.

> Have a look at [configuration files](/docs/provider-configuration/configuration-files#gateway)

## Manage through API

Service registry records and upstream operations are accessible through REST APIs. Service registry records are listed from `GET /api/upstreams/service-registry`; upstreams are managed from `/api/upstreams`. All service registry and upstream management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `upstreams:manage:all` granted.

> Have a look at [API documentation](/api/list-upstreams)

## Navigation

1. Top level routing - [General configuration](/docs/provider-configuration/service-registry/general-configuration)
2. Exposed paths - [URIs](/docs/provider-configuration/service-registry/uris)
3. Protecting traffic - [Authorization](/docs/provider-configuration/service-registry/authorization)
4. Upstream protection - [Security](/docs/provider-configuration/service-registry/security)
