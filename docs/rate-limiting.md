# Rate limiting

As stated in OAuth 2.0 specification, __authorization servers must rate limit requests__ to provide better security. boruta includes a rate limiter that __regulates traffic up to 10 requests per second__. That low limitation may be configurable in further release while the server would pass the testing phase.

The rate limiter is __based on a factors__ product applied to a constant providing a normalized probability of outage, when reached the server __throttle the request until reaching maximum penality__ where the request is rejected with an HTTP 429 response. Rate limiting is made according to the __remote IP__ and counts are incremented accordingly on __each boruta instance__.

:::note Penality computation
The probability is made of the product of the past aggregates per unit and is normalized to obtain a timeout value according to the configured penalty. That product is first deceptful fast increasing the timeout until reaching a minimum to be hopeful decreasing the timeouts to reach request rejection.
:::

## Policy

The authorization server API pipeline is configured with the following hard coded policy to all authorization server requests:

```elixir
plug RateLimit, count: 10, time_unit: :second, penality: 500, timeout: 5_000
```

Configuration:

- `count: 10` is the target request count for the selected time unit.
- `time_unit: :second` evaluates request activity per second.
- `penality: 500` controls how strongly repeated bursts increase the throttling delay.
- `timeout: 5_000` is the maximum tolerated throttling delay in milliseconds before the request is rejected.

## Limited endpoints

Rate limiting applies to the authorization server API pipeline, including:

- OAuth endpoints such as `/oauth/token`, `/oauth/introspect`, `/oauth/revoke`, `/oauth/userinfo`, and pushed authorization requests.
- OpenID endpoints such as discovery, JWKS, credential, and deferred credential endpoints.
- Metadata endpoints served through the JSON/JWT/event-stream API pipeline.
- [WIP] Identity endpoints (end-user facing pages)

## Response

When a request is rejected by the limiter, boruta returns:

```http
HTTP/1.1 429 Too Many Requests
```

The response body is empty.
