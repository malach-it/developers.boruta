# Backends configuration | Email configuration

Backends parameters help to __manage identity storage and associated features__ within the server. Those are to keep credentials and identities while providing them abilities helping to manage authorization and authentication provided by identity provider interfaces.

:::note Parameters sections
[Backends](/docs/provider-configuration/configure-backends) can be customized through either the Administration API or the user interface providing 6 __categories of settings__:

- General configuration
- Type
- __Email configuration__
- Identity federation
- Verifiable credentials
- User metadata
:::

## Email configuration parameters

<div class="parameters">

### SMTP configuration

__From__ is the `from` email header field, corresponding to the sender email.

__Relay__ is the SMTP server hostname which will be relaying the emails.

__Username__ the `username` part of the credentials used to connect to the SMTP server.

__Password__ the `password` part of the credentials used to connect to the SMTP server.

__SSL__ determine if the connection to the SMTP server is to be encrypted using SSL.

__TLS__ can be one of __Always__, __Never__, __If available__, determine if the emails are to be encrypted using TLS.

__Port__ is the SMTP server port to be used.

### Email templates

__Edit confirmation template__ is the template used while sending email confirmation emails.

__Edit reset password template__ is the template used while sending reset password emails.

__Edit transaction code template__ is the template used while sending OpenID 4 Verifiable Credentials issuance `tx_code` emails.

</div>

## User interface

![backend form](/assets/images/backends-email-configuration.png)
