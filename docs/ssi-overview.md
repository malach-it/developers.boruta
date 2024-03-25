# About Self-Sovereign Identity

## Context

In the evolution of digital identity management, the [OAuth 2.0 authorization framework](https://datatracker.ietf.org/doc/html/rfc6749) has been a pivotal standard, providing secure delegated access to resources. Yet, a newer paradigm is emerging that promises to revolutionize how identities are managed online: **the Self-Sovereign Identity (SSI)**.

SSI positions the individual at the center of the digital identity narrative, providing a more personal and autonomous approach to identity management.

> Boruta's team is currently conducting R&D work for the development of SSI solutions in addition to the OAuth 2.0 ones already available. 

:::info
We offer **SSI trainings** for a more in-depth dives into how SSI works and how to implement it. We support you every step of the way to understand the basics of SSI and the underlying specifications adopted by the European Union framework. Learn more about our SSI trainings [here](https://io.malach.it/ssi-trainings.html).
:::

---

## What is SSI?

Self-Sovereign Identity is a **user-centric model of digital identity** that gives individuals full control over the creation, management, and use of their digital identities, without reliance on centralized authorities.

It ensures that individuals can present verifiable credentials in a digital format and interact in the digital world with the same freedom and capacity for trust as they do in the offline world.

---

## Open ID connect and the European framework for SSI

**OpenID Connect** is the specification from [the OpenID Foundation](https://openid.net/foundation/) that focuses on enhancing Self-Sovereign Identity (SSI) ecosystems. It operates on top of [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749), allowing users to authenticate once with an identity provider, and then to use issued tokens for accessing multiple services. 

This aligns with SSI by **empowering users with control over their identity**, ensuring that they can manage access without repeatedly sharing credentials. OpenID Connect plays a crucial role in structuring SSI principles and offers a framework that supports user autonomy and privacy while maintaining compatibility with existing authentication infrastructures.

:::info
Learn more about the OpenID Connect specification [here](https://openid.net/developers/how-connect-works/).
:::

The **European Digital Identity Framework** builds upon the OpenID Connect specification to build a more simple and secure online identity verification system that would be interoperable across all EU member states. This framework ensures interoperability and adherence to strict privacy standards, such as GDPR, which aligns with the decentralized and user-centric authentication model facilitated by OpenID Connect.

:::info
Learn more about the European Digital Identity Wallet project [here](https://github.com/eu-digital-identity-wallet).
:::

---

### The Core principles of SSI

SSI is built upon several core principles that distinguish it from traditional identity management systems:

- **Existence**: Users must have an independent existence in the digital realm.
- **Control**: Users must control their identities, with the ability to access and manage their own data.
- **Access**: Users should always have access to their own data and consent to its use.
- **Transparency**: Systems and algorithms must be transparent, allowing users to understand identity system functions.
- **Persistence**: Identities must be long-lasting and not dependent on any single third-party authority.
- **Portability**: Information and identities should be transportable and not be locked into a single platform.
- **Interoperability**: Identities should be usable across multiple platforms and jurisdictions.
- **Consent**: Users must agree to the use of their identity data.
- **Minimalization**: Disclosure of claims must be minimized to the amount necessary for the task.
- **Protection**: The rights of users must be protected.

---

### The historical evolution of digital identity

OAuth 2.0 revolutionized third-party authorization in the 2000s by allowing users to grant apps access to their information without sharing passwords. It created a framework where **identity information is stored in centralized silos**, which paved the way but also created potential vulnerabilities and control by third-party service providers. 

Digital identity evolved toward more of a **federated world** in the 2010s to address the vulnerabilities. User registries were shared across organizations, and it was the birth of authorization-aware specifications such as OAuth 2.0 and OpenID Connect, SAML 2.0, CAS.

Since the early 2020s, SSI moved beyond by enabling **peer-to-peer exchanges of data** where trust is established through **cryptographic proofs**, reducing reliance on centralized systems and mitigating many of the risks associated with them. The third stage of digital identity marks a shift towards **decentralizing digital identities**, making digital identity safer.

:::info
We talk in more details about the historical evolution of digital identity in [this article](https://medium.com/@io.pascal.knoth/boruta-meets-self-sovereign-identity-as-a-verifiable-credential-issuer-479f2ffa5f4e)(on Medium).
:::

---

### The impacts of SSI

The implications of SSI are broad and potentially transformative:

- **Privacy**: Enhanced user privacy, as SSI allows for selective disclosure of attributes rather than entire identity profiles.
- **Security**: Reduced risk of data breaches, since personal data is not centrally stored.
- **User Experience**: Simplified verification processes, with no need for multiple usernames and passwords.
- **Inclusion**: The potential to provide secure digital identities to those who currently lack access to online services.

Self-Sovereign Identity marks a shift towards a more secure, private, and user-friendly method of managing digital identities.

As adoption grows, it could redefine the landscape of digital interactions, trust, and online freedom.
