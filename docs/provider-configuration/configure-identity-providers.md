# Identity providers configuration

Identity providers are the entities helping to customize the end-user authentication, and identity management pages and enabled features.

## Architecture

For each client you can configure a specific identity provider, that will be associated to a backend.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [client configuration](provider-configuration/configure-clients.md)

> Have a look at [backend configuration](provider-configuration/configure-backends.md)

## Templates edition

Identity provider templates are to be seen by the end-user, they are editable using Mustache templating engine helping to get access to global and page-specific variables (to be documented). You can at any moment reset your changes to go back to a working template. Here is the list of templates available to end-users, they are all editable:

* The **layout template** - the wrapper of all identity provider templates
* The **login template** - the authentication page where the end-user is to provide his credentials
* The **send reset password instructions template** - the page where the user fills out his email to get password reset instructions
* The **reset password template** - the page for the user to edit his password
* The **choose session template** - the page the end-user is redirected to when he has an active session helping him to choose if he wants to log on with this session or to create a new one
* The **registration template** - the page where end-users can create accounts
* The **user edition template** - the page where the end-user can edit his information
* The **send confirmation template** - the page where can ask for sending email confirmation instructions
* The **consent template** - the page where the end-user has the ability to consent client requested scopes

## Feature activation

As configuration, identity provider features can be toggled to be activated or disabled. Here is the list of the identity provider features:

* The **choose session feature** - give the ability to end-users to choose to authenticate with the active session if there is one or to log out and create a new session
* The **registration feature** - give the ability to end-users to create accounts
* The **user edition feature** - give the ability to end-users to edit their information (email/password)
* The **email confirmation feature** - enforce end-users to confirm their email in order to be able to log in.
* The **user consent feature** - give the ability for the end-users to consent to the client-requested scopes

## Manage through User Interface

The administration interface gives the ability to create, update and delete identity providers. You can access them by navigating to the "Identity providers" section in the sidebar menu.

![identity provider form](/assets/images/identity-provider-form.png)

## Manage through API

All identity provider operations are accessible through a REST API following the below description. All identity provider management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](configure-scopes.md#public-vs-private-scopes) scope `identity-providers:manage:all` granted.

> Have a look at [management API](provider-configuration/management-api.md)
