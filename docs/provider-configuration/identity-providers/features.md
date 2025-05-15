# Identity providers configuration | Features

Identity providers parameters help to __manage end-user means of authentication__. It gives the ability for them to follow the configured way they have to authenticate themselves to the service. Beyond authentication, the server provide ways for the end-user to manage identities and access.


:::note Parameters sections
[Identity providers](/docs/provider-configuration/configure-identity-providers) can be customized through either the [Administration API](/api/list-clients) or the user interface providing 2 __categories of settings__:

- General configuration
- __Features__
:::

## Features parameters

<div class="parameters">

__Choose session__ give the ability for the user to choose to keep current session or to create a new one on authorization

__Webauthn__ give the ability for end users to register an authentication second factor with Passkeys.
- __enable Webauthn__ gives to the users ability to activate webauthn
- __enforce Webauthn__ enforces to use webauthn as a second authentication factor

__Time based One Time Password__ give the ability for end users to register an authentication second factor with TOTP.
- __enable TOTP__ gives to the users the ability to activate TOTP
- __enforce TOTP__ enforces to use TOTP as a second authentication factor

__Registration__ give the ability for end users to register within the given identity provider. If activated the user have access to registration page and can provide its own credentials.

__User information edition__ give the ability for end users to update their account information.

__Email confirmation__ confirm new registred accounts. sends an email in order to confirm user's email.

__User consent__ users have to consent requested scopes to be authorized.

__Credential offer__ OpenID 4 Verifiable Credentials Issuance credential offer template edition.

__Credential presentation__ OpenID 4 Verifiable Presentations presentation request template edition.

</div>

## User interface

![identity provider form](/assets/images/identity-providers-features.png)
