# Backends configuration | Verifiable Credentials

Backends parameters help to __manage identity storage and associated features__ within the server. Those are to keep credentials and identities while providing them abilities helping to manage authorization and authentication provided by the identity provider interfaces.

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

__Add Verifiable credential__ exposes a Verifiable Credential for the client, provided its [configuration](/docs/provider-configuration/backends/verifiable-credentials#verifiable-credentials-issuance).

__Add Verifiable presentation__ enable the users to present Verifiable Credentials, given their [definition](/docs/provider-configuration/backends/verifiable-credentials#verifiable-presentations).

### Verifiable Credentials Issuance

__Credential identifier__ the identifier used to identify the credential within the issuance protocols. Would be accessible through `presentation_details` or an OAuth scope. The latter overiding the other.

__Verifiable credential type__ would set the `vct` claim in Verifiable Credentials depending their format.

__Version__ the OpenID 4 Verifiable Credentials Issuance version used to expose the credential. Would be one of:
- __Draft 11__
- __Draft 13__

__Format__ would be the format of the exposed credential.
- __jwt_vc__ from [W3C Verifiable Credential Data Model 1.0](https://www.w3.org/TR/vc-data-model-1.0)
- __jwt_vc_json__ from [W3C Verifiable Credential Data Model 1.0](https://www.w3.org/TR/vc-data-model-1.0)
- __vc+sd-jwt__ from [SD-JWT-based Verifiable Credentials](https://www.ietf.org/archive/id/draft-ietf-oauth-sd-jwt-vc-08.html)

__Defered__ define whenever the credential issuance is deffered or not.

__Types (separated with a whitespace)__ the types used to identify the credential within the issuance protocols.

__Time to live (in seconds)__ the time to live of the overall credential, defining its expiration.

__Add claim__ would add a claim containing identity information to the credential.

#### Claims

__Type__ the type of the current node in the claim tree.
- __attribute__ would be a standard attribute
- __object__ would be an object giving the ability to have children claims
- __array__ would be an array containing different claims

__Name__ would be the name of the claim giving the `key` of the attribute.

__Label__ would be a friendly labeling of the claim, stated in the `display` of exposed supported credentials.

__Pointer__ would give the way to access the claim `value` within the current resource owner claims.

#### Display

__Name__ would be the display name of the credential.

__Background color__ would give the background color of the displayed credential card.

__Text color__ would give the text color of the displayed credential card.

__Logo URL__ would give the logo URL of the displayed credential card.

__Logo alt text__ would give the logo alternative text of the displayed credential card.

### Verifiable Presentations

__Presentation identifier__ the identifier of the presentation that would be requested while asking to request a credential presentation.

__Presentation definition__ the given definition of the requested presentation to be validated.

</div>

## User interface

![backend form](/assets/images/backends-verifiable-credentials.png)
