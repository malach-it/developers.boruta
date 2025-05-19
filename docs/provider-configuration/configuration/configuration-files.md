# Global configuration | Configuration files

The server enables to __upload static configuration files__. With the impportant notice that the __resources are not overidden__, it helps configure the server giving static configuration files.

## YAML configuration files

Given a base configuration file template, you can create server resources following the attributes accessible through both the administration inteface and the API, the latter having a [documentation](/api/list-clients) giving resources schema.

```yaml
---
version: "1.0"
configuration:
  node_name: "test"
  gateway:
  - [...]
  microgateway:
  - [...]
  backend:
  - [...]
  identity_provider:
  - [...]
  client:
  - [...]
  role:
  - [...]
  scope:
  - [...]
  error_template:
  - [...]
  organization:
  - [...]
```

## Manage through User Interface

The Administration interface gives the ability to create, update and delete backends. Backends are listed through the `Configuration > upload a configuration file` section in the sidebar menu.

![upload configuration file view](/assets/images/upload-configuration-file.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `clients:manage:all` granted.

> Have a look at [How to get restricted access](/docs/provider-configuration/management-api#get-an-access-token)

> Have a look at the [TODO - API documentation](/api/list-scopes)
