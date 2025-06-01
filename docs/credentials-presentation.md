# Credentials presentation flow

![credential presentation](/assets/images/credentials-presentation.png)

---

## 2-step presentation

In order to __securely present credentials__, on top of OID4VP the server suggest as an [option](/docs/provider-configuration/clients/security#authorization) to force the verification of the presentations `vp_token` against the given `client_id`. This way, you can use SIOPV2 to fetch the required OpenID 4 Verifiable Presentations `client_id` with a DID given by the `id_token` from that step. Then, That `client_id` will be later used to verify the presentation `vp_token` signature in the last step.

This 2-step flow __prevents from QR code / deeplink stealth, reducing to one target the attack surface__ of such stealth. The authorization link of OpenID 4 Verfiable Presentations being attached to the public key provided by SIOPV2 and being already cryptographically verified by the flow, the attacker can forward a QR code / deeplink only valid for a single victim.

## Demonstration video (presentation)

<iframe src="https://www.loom.com/embed/50ad31ffae98457bb65dde98e83a19c2?sid=fdecd330-ae7c-4f2c-82d6-5c263098e10b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
