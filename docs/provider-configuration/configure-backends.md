# Backends configuration

Backends act as __user registries__ storing user related information for a better management. They use a configurable __identity source__ to keep identities safe but accessible for a better management. On top of that it gives __enhanced abilities__ to those users like custom attributes or email confirmation.

## Architecture

For __each client__ you can configure a specific __identity provider__, that will be associated to a __backend__, helping to __provide both authorization and authentication__ for them. This way, each client will have a custom interface as mean of authentication for the end-users.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [client configuration](/docs/provider-configuration/configure-clients.md)

> Have a look at [identity provider configuration](/docs/provider-configuration/configure-identity-providers.md)

## Configuration

Backends configuration helps to __select associated user registries__, means of credential storage along with __enhanced features__ for them. Those are to keep credentials and identities while providing them abilities helping manage authorization and authentication provided by [identity provider](/docs/provider-configuration/configure-identity-providers) interfaces.

## Manage through User Interface

The Administration interface gives the ability to create, update and delete backends. Backends are listed through the `Identity providers > backend list` section in the sidebar menu.

![backend view](/assets/images/backends-list.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `backends:manage:all` granted.

> Have a look at the [API documentation](/api/list-backends)

## Static configuration

Backends can be loaded from static configuration files with the `backend` section. Static backend entries can include type, email, identity federation, verifiable credentials, and user metadata settings.

```yaml
---
version: "1.0"
configuration:
  backend:
    - id: "00000000-0000-0000-0000-000000000001"
      name: "Example backend"
      is_default: true
      type: "Elixir.BorutaIdentity.IdentityProviders.Backend.Ecto"
      create_default_organization: true
      roles:
        - id: "00000000-0000-0000-0000-000000000020"
      smtp_from: "no-reply@example.com"
      smtp_relay: "smtp.example.com"
      smtp_port: 587
      smtp_username: "smtp-user"
      smtp_password: "smtp-password"
      smtp_tls: "always"
      smtp_ssl: false
      federated_servers:
        - name: "external-idp"
          client_id: "federated-client"
          client_secret: "federated-secret"
          base_url: "https://accounts.example.com"
          discovery_path: "/.well-known/openid-configuration"
          scope: "openid profile email"
          federated_attributes: "email name"
      metadata_fields:
        - attribute_name: "department"
          user_editable: true
          scopes: ["profile"]
      verifiable_credentials:
        - version: "1"
          credential_identifier: "BorutaCredential"
          time_to_live: 3600
          format: "jwt_vc"
          types: "VerifiableCredential BorutaCredential"
          claims:
            - name: "email"
              label: "Email"
              pointer: "email"
          display:
            name: "Boruta credential"
            locale: "en"
            background_color: "#ffffff"
            text_color: "#000000"
            logo:
              url: "https://example.com/logo.png"
              alt_text: "Example logo"
      verifiable_presentations:
        - presentation_identifier: "BorutaCredential"
          presentation_definition: |
            {
              "id": "boruta-credential",
              "input_descriptors": []
            }
```

> Have a look at [configuration files](/docs/provider-configuration/configuration-files#backend)

## Navigation

- Top level configuration - [General configuration](/docs/provider-configuration/backends/general-configuration)
- Backend type - [Type](/docs/provider-configuration/backends/type)
- Sending emails - [Email configuration](/docs/provider-configuration/backends/email-configuration)
- Federating identities - [Identity federation](/docs/provider-configuration/backends/identity-federation)
- Issuing / Verifying Verifiable Credentials - [Verifiable credentials](/docs/provider-configuration/backends/verifiable-credentials)
- Custom user attributes - [User metadata](/docs/provider-configuration/backends/user-metadata)
