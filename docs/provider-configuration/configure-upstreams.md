# Upstreams configuration

Upstreams are here the configuration of the flow the gateway will apply for requests to be __forwarded to backends__. Corresponding to given paths, the gateway will __route the requests__ to the configured server. More than routing capabilities, boruta __enhance the requests__ with the current client and user information but also can __apply authorization__ to them.

## Upstream configuration

boruta runs a pool of connections to the upstreamed backend. To configure those you have to provide the `scheme`, the `host`, and the `port` for it to know which server forward to.

The gateway will expose a single entrypoint, in order to route to the servers, the routing is based on the requested path computed by priority. you can provide them filling the `URIs` fields. Note that you can strip URI meaning that the provided URI part will not be forwarded to the backend.

### Authorization

![Gateway authorization flow](/assets/images/authorization-gateway-en.png)

You have the ability to provide authorization to the requests, enforcing clients to have a valid access token. On top of that you can forbid access requiring it to have the needed method / OAuth scope couple. While authorizing, you can customize the unauthorized and forbidden response templates and content-type.

The authorized requests are enhanced with current request information providing a `X-Forwarded-Authorization` header to the backend with a jwt incorporating client and user information. Those are to be signed with the given algorithm and secrets.

## Microgateway / Sidecars

![microgateways](/assets/images/boruta-microgateway.png)

__More than a single gateway__, boruta can act as a microgateway. Using infrastructure to connect boruta instances together, you __can have sidecars__ connected to one or some of your backends. You can choose the active node configuration with the `Node` attribute of upstreams. It will use the instance ip as default but can be edited with the usage of static configuration (see below). Note that the gateway and the microgateway will respectively exposed on the ports set by `BORUTA_GATEWAY_PORT` and `BORUTA_GATEWAY_SIDECAR_PORT` environment variables.

## Manage through User Interface

The Administration interface gives the ability to create, update and delete upstreams. All upstream attributes are accessible via the captured form below. All these operations can be managed in the "Upstreams" section in the sidebar menu.

![upstream form](/assets/images/upstream-form.png)

## Manage through API

All upstream operations are accessible through a REST API following the below description. All upstream management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `upstreams:manage:all` granted.

> Have a look at [How to get restricted access](management-api#get-an-access-token)
