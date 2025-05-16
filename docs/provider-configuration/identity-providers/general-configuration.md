# Identity providers configuration | General configuration

Identity providers parameters help to __manage end-user means of authentication__. It gives the ability for them to follow the configured way they have to authenticate themselves to the service. Beyond authentication, the server provide ways for the end-users to manage identities and access.


:::note Parameters sections
[Identity providers](/docs/provider-configuration/configure-identity-providers) can be customized through either the [Administration API](/api/list-identity-providers) or the user interface providing 2 __categories of settings__:

- __General configuration__
- Features
:::

## General configuration parameters

<div class="parameters">

__Name__ help to recognize the configured identity provider within the administration interface.

__Backend__ set the connected backend providing the end-user credentials, configurations and attributes.

__Sessions__ help to configure the log in temaplates and features giving means for the user to be identified giving its username.
- __check password__ switches the password requirement for authentication. Whenn disabled, the server creates a one time login associated to the username.

__Global templates__ allow to edit templates that can't be desactivated:
- __Send password instructions__ is the template that help to send a [recover password email](/docs/provider-configuration/backends/email-configuration) giving the end-user username
- __Reset password__ help for the end-user to edit his password after following the recovery link that has been sent through an email

</div>

## User interface

![identity provider form](/assets/images/identity-providers-general-configuration.png)
