
# What is boruta?

Boruta is an __OAuth 2.0 and OpenID Connect authorization provider__. 

As an __Identity and Access Management solution__, it helps centralize authorization and identity related issues within your infrastructures. boruta stands as a server that gathers user data in order for them to authenticate and to expose and apply access rules for your HTTP services (APIs) enabling better security.

Boruta is composed of:
* an __authorization server__, 
* an __administration interface__, 
* an __identity provider__,
* and a __gateway__ for gathering all API security related needs for a serivce composed of one or more backends. 

It enables to have Single Sign On and identity federation capabilities following the OAuth 2.0 framework.

<div class="centered"><img src="/assets/images/components.png" /></div>

---

## Why another authorization provider?

Boruta has been designed to be both __end-user and developer friendly__. 

With a high level of customization, it helps to have an immersive experience for your users giving them the interfaces you designed. The administration interface gives an exhaustive set of configuration switches that is also accessible through REST API calls for automation.

As an __open-source product__, it takes the advantage to being backed by a community of developers making it a secure and extensible solution. All suggestions, feature requests, or any kind of contribution are very welcome.

:::info
Discover boruta's [GitHub repository](https://github.com/malach-it/boruta-server).
:::

This server has been __designed for scalability__, the firsts load tests were performed at 1500 requests per second with a standard production server with no latency issues. The Erlang Virtual Machine used as a platform makes it also scallable in an horizontal way providing more machines and connecting them together.

---

## About the identity provider

Boruta comes up with an __integrated identity provider__, that can both __store the users' credentials__ internaly and connect to a __LDAP compliant__ server (Active Directory is). It does more than enable password authentication abilities and allows to __enhance users__ with features like **custom attributes**, __enforce email confirmation__, or __consent__ to the client's requested scopes.

Multi-Factor authentication up to Self-Sovereign Identity are on the roadmap but not implemented yet.

---

## About the gateway

Boruta is __coupled to a gateway__ that acts as a __reverse-proxy__ sitting between your frontends and backends in order to __apply security rules__ in a fast and non-intrusive way. To perform those access restrictions, the gateway is based on boruta-provided access tokens and according granted scopes to mitigate the traffic and allows to get access to OpenID profile attributes in a secure way.

![Gateway authorization flow](/assets/images/authorization-gateway-en.png)

---

## Specifications and certifications

As it is, Boruta server aim to follow the RFCs from IETF:
- [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [RFC 7662 - OAuth 2.0 Token Introspection](https://tools.ietf.org/html/rfc7662)
- [RFC 7009 - OAuth 2.0 Token Revocation](https://tools.ietf.org/html/rfc7009)
- [RFC 7636 - Proof Key for Code Exchange by OAuth Public Clients](https://tools.ietf.org/html/rfc7636)
- [RFC 7521 - Assertion Framework for OAuth 2.0 Client Authentication and Authorization Grants](https://www.rfc-editor.org/rfc/rfc7521)
- [RFC 7523 - JSON Web Token (JWT) Profile for OAuth 2.0 Client Authentication and Authorization Grants](https://tools.ietf.org/html/rfc7523)

And the specifications from the OpenID Foundation:
- [OpenID Connect core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
- [OpenID Connect Dynamic Client Registration 1.0 incorporating errata set 1](https://openid.net/specs/openid-connect-registration-1_0.html)

This server has been certified for the Basic, Implicit, and Hybrid OpenID Provider profiles by the OpenID Foundation on October, 18th 2022 for the tagged version 0.1.0

This server has been also certified for the Config and Dynamic OpenID Provider profiles by the OpenID Foundation on May, 16th 2023 for the tagged version 0.2.0

![OID certification mark](/assets/images/oid-certification-mark.png)

---

## Navigation

Understand how to configure the server in [provider configuration](provider-configuration/configure-clients.md)

Set up boruta into your infrastructure with [deployment](deployment/docker.md)

