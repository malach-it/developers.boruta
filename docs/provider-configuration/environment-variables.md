# Provider configuration | Environment variables

boruta-server is configured at runtime with environment variables. Those variables define secrets, database connections, public URLs, gateway listeners, service discovery, static configuration files, administration bootstrap values, and DID service integrations.

## Core server variables

<div class="parameters">

__SECRET_KEY_BASE__ is the Phoenix secret key base used by the server. It must be at least 64 characters long.

__BORUTA_SESSION_COOKIE_KEY__ defines the session cookie key shared by the web, identity, and administration endpoints. Defaults to `_boruta_web_key`.

__BORUTA_SESSION_COOKIE_SIGNING_SALT__ defines the signing salt used for the shared session cookie. Defaults to `OCKBuS86`.

__BORUTA_REMEMBER_ME_COOKIE__ defines the identity remember-me cookie name. Defaults to `_boruta_identity_web_user_remember_me`.

__MAX_LOG_RETENTION_DAYS__ defines how many days server logs are retained. Defaults to `60`.

</div>

## Database variables

<div class="parameters">

__POSTGRES_USER__ defines the PostgreSQL user used by boruta applications.

__POSTGRES_PASSWORD__ defines the PostgreSQL password used by boruta applications.

__POSTGRES_DATABASE__ defines the PostgreSQL database name.

__POSTGRES_HOST__ defines the PostgreSQL host.

__POOL_SIZE__ defines the PostgreSQL pool size of each application. The total connection count depends on the applications enabled in the release. Defaults to `5`.

</div>

## Cluster variables

<div class="parameters">

__LIBCLUSTER_HOSTS__ defines a comma-separated list of Erlang node names used for Docker Compose discovery, for example `boruta@boruta-1,boruta@boruta-2`.

__K8S_NAMESPACE__ configures Kubernetes service discovery when it is set together with `K8S_SELECTOR`.

__K8S_SELECTOR__ configures Kubernetes service discovery when it is set together with `K8S_NAMESPACE`.

</div>

## Administration variables

<div class="parameters">

__BORUTA_ADMIN_OAUTH_CLIENT_ID__ defines the OAuth client id used by the administration interface. It is used when seeding the default administration client.

__BORUTA_ADMIN_OAUTH_CLIENT_SECRET__ defines the OAuth client secret used by the administration interface. It is used when seeding the default administration client.

__BORUTA_ADMIN_OAUTH_BASE_URL__ defines the authorization server base URL used by the administration interface, without trailing slash.

__BORUTA_ADMIN_EMAIL__ defines the first administration user email. It is used by the setup task.

__BORUTA_ADMIN_PASSWORD__ defines the first administration user password. It is used by the setup task.

__BORUTA_ADMIN_HOST__ defines the public host where the administration server is deployed.

__BORUTA_ADMIN_BIND__ defines the IP address the administration server binds to.

__BORUTA_ADMIN_PORT__ defines the port where the administration server listens. Defaults to `8081` in releases.

__BORUTA_ADMIN_BASE_URL__ defines the administration HTTP endpoint base URL, without trailing slash.

__BORUTA_SUB_RESTRICTED__ restricts administration access to a single user id when set.

__BORUTA_ORGANIZATION_RESTRICTED__ restricts administration access to a single organization id when set.

</div>

## OAuth server variables

<div class="parameters">

__BORUTA_OAUTH_SCHEME__ defines the scheme used for OAuth URL generation. Defaults to `https`.

__BORUTA_OAUTH_HOST__ defines the public host where the OAuth server is deployed.

__BORUTA_OAUTH_BIND__ defines the IP address the OAuth server binds to. Defaults to `::`.

__BORUTA_OAUTH_PORT__ defines the port where the OAuth server listens. Defaults to `8080` in releases.

__BORUTA_OAUTH_ACCEPTORS__ defines the number of acceptor processes for the OAuth server. Defaults to `8`.

__BORUTA_OAUTH_BASE_URL__ defines the OAuth server HTTP endpoint base URL, without trailing slash.

</div>

## Gateway variables

<div class="parameters">

__BORUTA_GATEWAY_SERVER__ enables the HTTP gateway listener. Defaults to `false` in releases.

__BORUTA_GATEWAY_PORT__ defines the HTTP gateway port. Defaults to `8083`.

__BORUTA_GATEWAY_HTTPS_SERVER__ enables the HTTPS gateway listener. Defaults to `false`.

__BORUTA_GATEWAY_HTTPS_PORT__ defines the HTTPS gateway port. Defaults to `8043`.

__BORUTA_GATEWAY_HTTPS_VERIFY_CLIENT_CERTIFICATE__ requires and verifies client certificates on the HTTPS gateway listener. Defaults to `false`.

__BORUTA_GATEWAY_SIDECAR__ enables the HTTP sidecar gateway listener. Defaults to `false` in releases.

__BORUTA_GATEWAY_SIDECAR_PORT__ defines the HTTP sidecar gateway port. Defaults to `8084`.

__BORUTA_GATEWAY_SIDECAR_HTTPS_SERVER__ enables the HTTPS sidecar gateway listener. Defaults to `false`.

__BORUTA_GATEWAY_SIDECAR_HTTPS_PORT__ defines the HTTPS sidecar gateway port. Defaults to `8044`.

__BORUTA_GATEWAY_SIDECAR_HTTPS_VERIFY_CLIENT_CERTIFICATE__ requires and verifies client certificates on the HTTPS sidecar gateway listener. Defaults to `false`.

__BORUTA_GATEWAY_PROXY_SERVER__ enables the HTTP forward proxy listener. Defaults to `false` in releases.

__BORUTA_GATEWAY_PROXY_PORT__ defines the HTTP forward proxy port. Defaults to `5555`.

__BORUTA_GATEWAY_HTTPS_PROXY_SERVER__ enables the HTTPS forward proxy listener. Defaults to `false` in releases.

__BORUTA_GATEWAY_HTTPS_PROXY_PORT__ defines the HTTPS forward proxy port. Defaults to `4444`.

__BORUTA_GATEWAY_ACCEPTORS__ defines the number of acceptor processes for gateway, sidecar, and proxy listeners. Defaults to `8`.

__BORUTA_GATEWAY_CONFIGURATION_PATH__ defines the path containing the gateway static configuration file. Defaults to `config/example-configuration.yml` in releases.

</div>

## Static configuration variables

<div class="parameters">

__BORUTA_CONFIGURATION_PATH__ defines the path containing the boruta static configuration file.

</div>

## DID service variables

<div class="parameters">

__DID_RESOLVER_BASE_URL__ defines the DID resolver API endpoint, according to the W3C DID resolution specification. Defaults to `https://api.godiddy.com/1.0.0/universal-resolver`.

__DID_REGISTRAR_BASE_URL__ defines the DID registrar API endpoint, according to the DID registration specification. Defaults to `https://api.godiddy.com/1.0.0/universal-registrar`.

__DID_SERVICES_API_KEY__ defines the API key granting access to DID resolver and registrar services.

</div>
