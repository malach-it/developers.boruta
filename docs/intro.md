# boruta identity platform documentation

<div class="vision">

boruta aims to __provide organizations tools to manage their users digital identities__ for them to provide better services. From identity federation to decentralized identity, it also aims __to be end-user centric__ enabling confidentiality using the services and giving them privacy within their interactions. Those are made __to build better and secure software__ for both the organizations that build them and the end-users that use their services.

</div>

## What is boruta?

Boruta is an __OAuth 2.0 and satellites specifications authorization server implementation__. As an __Identity and Access Management solution__, it helps centralize authorization and identity related issues within your infrastructures. boruta stands as a server that help for the users to authenticate and to expose and apply access rules for your HTTP services (APIs) enabling better security.

boruta is composed of an __authorization server__, an __administration interface__, an __identity provider__ and an experimental __gateway__ for gathering all API security related needs for a serivce composed of one or more backends. It enables to have Single Sign On and identity federation capabilities following the OAuth 2.0 framework.

<div class="vision">

__ENABLING ORGANIZATIONS THEN USERS TO MANAGE DIGITAL IDENTITIES WHERE DATA PROTECTION IMPROVE SYSTEMS SECURITY__

</div>

<div class="centered"><img src="/assets/images/components.png" /></div>

## Why another authorization provider?

boruta has been designed to be both __end-user and developer friendly__. With a high level of customization, it helps to have an immersive experience for your users giving them custom interfaces. The administration interface gives an exhaustive set of configuration switches that is also accessible through REST API calls for automation.

As an __open-source product__, it takes the advantage to being backed by a community of developers making it a secure and extensible solution. All suggestions, feature requests, or any kind of contribution will be very welcome.

> Have a look at the [GitHub repository](https://github.com/malach-it/boruta-server)

This server has been __designed for scalability__, the firsts load tests were performed at 1500 requests per second with a standard production server with no latency issues. The Erlang Virtual Machine used as a platform makes it also scallable in an horizontal way providing more machines and connecting them together.

With an implementation of __OpenID 4 Verifiable Credentials Issuance__ (OID4VCI) and __OpenID 4 Verifiable presentations__ (OID4VP), boruta provides means to be __compliant with the eIDAS 2.0 regulation__. On top of those protocols, it brings ways to get identities from a data source still being secure and with __low integration costs__, being part of your infrastructure by addition, not replacement. Indeed, boruta can leverage identity federation to restrict access to verifiable credentials making it a __secure and privacy preserving solution__.

## About an identity provider

boruta comes up with an __integrated idenity provider__, it can both __store the users' credentials__ internaly and connect to a __LDAP compliant__ server (Active Directory is). It helps more than enable password authentication abilities, to __enhance users__ with features like having __custom attributes__, __enforce email confirmation__, or __consent__ to the client's requested scopes.

## About a gateway

boruta is __coupled to a gateway__ that acts as a __reverse-proxy__ sitting between your frontends and backends in order to __apply security rules__ in a fast and non-intrusive way. To perform those access restrictions, the gateway is based on boruta-provided access tokens and according granted scopes to mitigate the traffic and allows to get access to OpenID profile attributes in a secure way.

![Gateway authorization flow](/assets/images/authorization-gateway-en.png)

## Implemented specifications and certification

As it, boruta server aim to follow the RFCs from IETF:
- [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [RFC 7662 - OAuth 2.0 Token Introspection](https://tools.ietf.org/html/rfc7662)
- [RFC 7009 - OAuth 2.0 Token Revocation](https://tools.ietf.org/html/rfc7009)
- [RFC 7636 - Proof Key for Code Exchange by OAuth Public Clients](https://tools.ietf.org/html/rfc7636)
- [RFC 7521 - Assertion Framework for OAuth 2.0 Client Authentication and Authorization Grants](https://www.rfc-editor.org/rfc/rfc7521)
- [RFC 7523 - JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants](https://tools.ietf.org/html/rfc7523)
- [RFC 9449 - OAuth 2.0 Demonstrating Proof-of-Possession at the Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop)
- [RFC 9126 - OAuth 2.0 Pushed Authorization Requests](https://datatracker.ietf.org/doc/html/rfc9126)

And the specifications from the OpenID Foundation:
- [OpenID Connect core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- [OpenID Connect Dynamic Client Registration 1.0 incorporating errata set 1](https://openid.net/specs/openid-connect-registration-1_0.html)
- [OpenID for Verifiable Credential Issuance](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html)
- [Self-Issued OpenID Provider v2](https://openid.net/specs/openid-connect-self-issued-v2-1_0.html)
- [OpenID for Verifiable Presentations - draft 21](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)

This server has been certified for the Basic, Implicit, and Hybrid OpenID Provider profiles by the OpenID Foundation on October, 18th 2022 for the tagged versions 0.1.0 and 0.5.0

This server has been certified for the Config and Dynamic OpenID Provider profiles by the OpenID Foundation on May, 16th 2023 for the tagged version 0.2.0

This server has also been certified against the [European Blockchain Service Infrastructure (EBSI)](https://ec.europa.eu/digital-building-blocks/sites/display/EBSI) issuance test suite for the tagged version 0.4.0 and for verifiable credential verification for the tagged version 0.5.0.

![EBSI certified - issue](/assets/images/ebsi-certification-issuance.png)
![EBSI certified - verify](/assets/images/ebsi-certification-verify.png)
![OpenID certified](/assets/images/oid-certification-mark.png)


## Navigation

1. Getting up and running - [Quickstart](quickstart.md)
2. Understand how to configure the server - [provider configuration](provider-configuration/configure-clients.md)
3. Set up boruta into your infrastructure - [deployment](deployment/docker.md)
