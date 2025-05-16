# (WIP) Backends configuration | Verifiable credentials

Backends parameters help to __manage identity storage and associated features__ within the server. Those are to keep credentials and identities while providing them abilities helping to manage authorization and authentication provided by identity provider interfaces.

:::note Parameters sections
[Backends](/docs/provider-configuration/configure-backends) can be customized through either the Administration API or the user interface providing 6 __categories of settings__:

- General configuration
- Type
- Email configuration
- Identity federation
- __Verifiable credentials__
- User metadata
:::

## Verifiable credentials parameters

<div class="parameters">

### Verifiable Credentials Issuance

__Add Verifiable credential__

__Credential identifier__

__Verifiable credential type__

__Version__
- __Draft 11__
- __Draft 13__

__Format__
- __jwt_vc__
- __jwt_vc_json__
- __vc+sd-jwt__

__Defered__

__Types (separated with a whitespace)__

__Time to live (in seconds)__

__Add claim__

#### Claims

__Type__
- __attribute__
- __object__
- __array__

__Name__

__Label__

__Pointer__

#### Display

__Name__

__Background color__

__Text color__

__Logo URL__

__Logo alt text__

### Verifiable Presentations

__Presentation identifier__

__Presentation definition__

</div>

## User interface

![backend form](/assets/images/backends-verifiable-credentials.png)
