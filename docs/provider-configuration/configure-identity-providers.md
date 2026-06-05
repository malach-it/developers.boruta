# Identity providers configuration

Identity providers are the server resources helping to __customize the end-user authentication interface__. Those means of authentication provide customizable flows and interfaces that help to keep the service branding while providing authentication for them in a seamless way. In case of misconfiguration in navigation error from the end-user, __fallbacks to [error templates](configuration/error-templates)__ are provided to keep a good end-user experience.

## Architecture

For __each client__, you can configure a specific __identity provider__, that will be associated to a __backend__, helping to __provide both authorization and authentication__ for them. This way, each client will have a custom interface as mean of authentication for the end-users.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [client configuration](provider-configuration/configure-clients.md)

> Have a look at [backend configuration](provider-configuration/configure-backends.md)

## Manage through User Interface

The administration interface gives the ability to create, update and delete identity providers. You can access them by navigating to the `Identity providers > identity provider list` section in the sidebar menu.

![identity provider view](/assets/images/identity-providers-list.png)

## Manage through API

All identity provider operations are accessible through a REST API following the below description. All identity provider management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](configure-scopes.md#public-vs-private-scopes) scope `identity-providers:manage:all` granted.


> Have a look at [API documentation](/api/list-identity-providers)

## Static configuration

Identity providers can be loaded from static configuration files with the `identity_provider` section. Use `backend_id` to attach the identity provider to a backend.

```yaml
---
version: "1.0"
configuration:
  identity_provider:
    - id: "00000000-0000-0000-0000-000000000002"
      name: "Example identity provider"
      backend_id: "00000000-0000-0000-0000-000000000001"
      consentable: true
      choose_session: true
      registrable: true
      confirmable: true
      totpable: true
      enforce_totp: false
      user_editable: true
      templates:
        - type: "layout"
          content: "<html>{{ content }}</html>"
        - type: "login"
          content: "<form>[...]</form>"
```

> Have a look at [configuration files](/docs/provider-configuration/configuration-files#identity_provider)
