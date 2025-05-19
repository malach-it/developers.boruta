# Backends configuration | General configuration

Backends parameters help to __manage identity storage and associated features__ within the server. Those are to keep credentials and identities while providing them abilities helping to manage authorization and authentication provided by the identity provider interfaces.

:::note Parameters sections
[Backends](/docs/provider-configuration/configure-backends) can be customized through either the Administration API or the user interface providing 6 __categories of settings__:

- __General configuration__
- Type
- Email configuration
- Identity federation
- Verifiable credentials
- User metadata
:::

## General configuration parameters

<div class="parameters">

__Name__ help to recognize the configured backend within the administration interface.

__Default__ define the backend which will be used in case of resource owner password credentials requests.

__Create default organization__ backend newly created users will have a default organization along with them.

__Roles__ are the roles assigned at runtime to all configured backend users.

</div>

## User interface

![backend form](/assets/images/backends-general-configuration.png)
