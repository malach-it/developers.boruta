# Identity providers configuration

Identity providers are the server resources helping to __customize the end-user authentication interface__. Those means of authentication provide customizable flows and interfaces that help to keep the service branding while providing authentication for them in a seamless way. In case of misconfiguration in navigation error from the end-user, __fallbacks to [error templates](configuration/error-templates)__ are provided to keep a good end-user experience.

## Architecture

For __each client__, you can configure a specific __identity provider__, that will be associated to a __backend__, helping to __provide both authorization and authentication__ for them. This way, each client will have a custom interface as mean of authentication for the end-users.

![Clients, identity providers, and backends](/assets/images/client-identity-provider-backend-en.png)

> Have a look at [client configuration](provider-configuration/configure-clients.md)

> Have a look at [backend configuration](provider-configuration/configure-backends.md)

## Templates edition

Identity provider templates are to be seen by the end-user, they are __editable using [Mustache](https://mustache.github.io/) templating engine__ helping to get access to global and page-specific variables. You can at any moment reset your changes to go back to a default template. User navigation help going through the customized templates giving the __best user experience__.

### Global templates variables

<div class="parameters">

__{federated server name}.login_url__ gives the login URL in case of identity federation helping to implement "login with" button. That variable is associated with the [configuration of a federated server](/docs/provider-configuration/backends/identity-federation).

__messages__ gives the server messages array having for each of them `type` and `content` attributes.

__\_csrf_token__ gives the anti request forgery token that is to be sent along with each end-user form.

__errors__ gives the current errors array having for each of them a `message` attribute.

__client__ gives the current client associated to the request, it has all the corresponding client attributes.

#### The server URL that the end-user can navigate to

__delete_user_session_path__ accessible through `DELETE`

__edit_user_path__ accessible through `GET`

__destroy_user_path__ accessible through `POST`

__new_user_totp_registration_path__ accessible through `GET`

__create_user_totp_registration_path__ accessible through `POST`

__new_user_webauthn_registration_path__ accessible through `GET`

__create_user_webauthn_registration_path__ accessible through `POST`

__new_user_registration_path__ accessible through `GET`

__new_user_reset_password_path__ accessible through `GET`

__new_user_session_path__ accessible through `GET`

__update_user_reset_password_path__ accessible through `POST`

__update_user_path__ accessible through `POST`

#### Identity provider configurations

__registrable?__ equals to `true` if the identity provider user registration feature is enabled.

__totpable?__ equals to `true` if the identity provider Time base One Time Password feature is enabled.

__user_editable?__ equals to `true` if the identity provider user edition feature is enabled.

</div>

## Feature activation

As configuration, identity provider __features can be toggled__ to be activated or disabled. Those features __customize the authentication flow__ the user will encounter for identifying themselves to the service. The features give abilities such as session management, Multi-Factor Authentication, user management, or consent.

## Manage through User Interface

The administration interface gives the ability to create, update and delete identity providers. You can access them by navigating to the `Identity providers > identity provider list` section in the sidebar menu.

![identity provider view](/assets/images/identity-providers-list.png)

## Manage through API

All identity provider operations are accessible through a REST API following the below description. All identity provider management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](configure-scopes.md#public-vs-private-scopes) scope `identity-providers:manage:all` granted.


> Have a look at [How to get restricted access](management-api#get-an-access-token)

> Have a look at [API documentation](/api/list-identity-providers)
