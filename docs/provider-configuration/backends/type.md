# Backends configuration | Type

Backends parameters help to __manage identity storage and associated features__ within the server. Those are to keep credentials and identities while providing them abilities helping to manage authorization and authentication provided by identity provider interfaces.

:::note Parameters sections
[Backends](/docs/provider-configuration/configure-backends) can be customized through either the Administration API or the user interface providing 6 __categories of settings__:

- General configuration
- __Type__
- Email configuration
- Identity federation
- Verifiable credentials
- User metadata
:::

## Type parameters

<div class="parameters">

__Type__ is the backend type, can be one of:
- __Internal__ user credentials are stored within boruta postgreSQL dependency database
- __LDAP__ user credentials are checked and updated against a LDAP compliant server

### Internal configuration

__Password hashing algorithm__ is the algorithm used to hash the user passwords that then will be stored in their hashed form. All those hashing algorithms are provided with their __custom parameters__.
- __Argon2__ uses [Argon2](https://en.wikipedia.org/wiki/Argon2) hashing algorithm
- __Bcrypt__ uses [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) hashing algorithm
- __Pbkdf2__ uses [Pbkdf2](https://en.wikipedia.org/wiki/PBKDF2) hashing algorithm

:::danger hashing algorithms
Any change in either the algorithm or the parameters will __invalidate all already stored passwords__.
:::

### LDAP configuration (experimental)

__Host__ would be the LDAP server hostname.

__User RDN attribute__ would be the user `username` Relative Distinguished Name.

__Base distinguished name (dn)__ would be the base Distinguished Name.

__Users organization unit (ou)__ would be the users Organization Unit.

__Master distinguished name (needed only for user edition)__ used for `username` or `passowrd` edition, would be the master Distinguished Name.

__Master password (needed only for user edition)__ used for `username` or `passowrd` edition, would be the master password.

__Pool size__ would be the connection pool size kept alive with the LDAP server
</div>

## User interface

![backend form](/assets/images/backends-type.png)
