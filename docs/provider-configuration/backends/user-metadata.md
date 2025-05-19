# Backends configuration | User metadata

Backends parameters help to __manage identity storage and associated features__ within the server. Those are to keep credentials and identities while providing them abilities helping to manage authorization and authentication provided by the identity provider interfaces.

:::note Parameters sections
[Backends](/docs/provider-configuration/configure-backends) can be customized through either the Administration API or the user interface providing 6 __categories of settings__:

- General configuration
- Type
- Email configuration
- Identity federation
- Verifiable credentials
- __User metadata__
:::

## User metadata parameters

<div class="parameters">

__Add metadata field__ add an attribute to users' schema that would sit on top of base identification credentials. Those would be present in resource owner claims.

### Metadata field

__User editable__ define if users can update the metadata field.

__Scope restriction (leave blank for no restriction)__ gives the list of scopes needed to access the metadata field.

__Attribute name__ is the name of the attribute, the `key` of the attribute when expressed as JSON.

</div>

## User interface

![backend form](/assets/images/backends-user-metadata.png)
