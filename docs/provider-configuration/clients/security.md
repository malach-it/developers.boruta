# Clients configuration

Client attributes help __manage the authorization capabilities for OAuth 2.0 and satellites flows__. They provide a high level of customization helping the server to be integrated within infrastructures seamlessly. Those configuration help the flows to be both business and technically adapted for the addressed use case.

:::note Parameters sections
[OAuth clients](/docs/provider-configuration/configure-clients) can be customized through either the [Administration API](/docs/provider-configuration/management-api) or the user interface providing 4 __categories of settings__:

- General configuration
- Authentication
- __Security__
- Grant types
:::

## Cryptographic Signatures

boruta gives means to __implement and connect signature adapters__ which provide means for signing the authorization artifacts both from the federated identity (ID Tokens) and the decentralized identity (Verifiable Credentials). __Out of the box__, an internal (boruta provided) and an Universal adapter are implemented and ready to use. Those support cryptographic material generation and use along side with Decentralized IDentifiers support. Public and Private Keys are the __base for enabling signatures__ and the public part of the keys is exposed through the jwks OpenID endpoint. This enables to connect boruta to __Hardware Security Modules (HSM)__ with low effort, enabling them to store cryptographic keys in a secure enclave.

## Security parameters

> __Enforce Demonstration Proof-of-Possession (DPoP)__ enables the client to only support [DPoP](https://datatracker.ietf.org/doc/html/rfc9449) requests.

> __Enforce pre-authorized code transaction code__ enforces the presentation of a `tx_code` while issuing verifiable credentials.

> __Authorize scope__ would determine if the client defines the specific public and private scopes to be authorized.

> __Authorized scopes__ would be the list of scopes that can be granted with this client.

> __PKCE__ would determine if [Proof Key for Code Exchange](https://datatracker.ietf.org/doc/html/rfc7636) flow is enforced using this client.

> __Public refresh token__ allow refreshing tokens without providing a `client_secret`

> __Public revoke__ allow to revoke tokens without providing a `client_secret`

## User interface
![client form](/assets/images/oauth-clients-security.png)

