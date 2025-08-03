# Identity providers configuration | Templates edition

Identity provider templates are to be seen by the end-user, they are __editable using [Mustache](https://mustache.github.io/) templating engine__ helping to get access to global and page-specific variables. You can at any moment reset your changes to go back to a default template. User navigation help going through the customized templates giving the __best user experience__.

:::note Parameters sections
[Identity providers](/docs/provider-configuration/configure-identity-providers) can be customized through either the [Administration API](/api/list-identity-providers) or the user interface providing 2 __categories of settings__:

- General configuration
- __Templates edition__
- Features
:::

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

### Page specific variables

<div class="parameters">

__current_user__ the current user object navigating on the interface. The `username`, `webauthn_registered_at`, `totp_registered_at` and `metadata` attributes are exposed.

__client__ the current oauth client the user is navigating to. The `name` attribute is exposed.

__scopes__ the list of requested scopes objects. The `name`, `label` and `public` attributes are exposed.

__webauthn_options__ the webauthn option to be given to given to the browser API. The `rp`, `user`, `challenge`, `credential_id` and `publicKeyCredParams` attributes are exposed.

__base64_credential_offer_qr_code__ the base64 encoded credential offer QR code image.

__credential_offer_deeplink__ the credential offer deeplink text.

__base64_presentation_qr_code__ the base64 encoded verifiable presentation QR code image.

__presentation_deeplink__ the verifiable presentation deeplink text.

__code__ the credential offer or verifiable presentation code used to trigger presentation server sent events.
</div>
