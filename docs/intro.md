# boruta identity platform documentation

## What is boruta?

Boruta is an __OAuth 2.0 and OpenID Connect authorization provider__. As an __Identity and Access Management solution__, it helps centralize authorization and identity related issues within your infrastructures. boruta stands as a server that gathers user data in order for them to authenticate and to expose and apply access rules for your HTTP services (APIs) enabling better security.

boruta is composed of an __authorization server__, an __administration interface__, an __identity provider__ and a __gateway__ for gathering all API security related needs for a serivce composed of one or more backends. It enables to have Single Sign On and identity federation capabilities following the OAuth 2.0 framework.

## Why another authorization provider?

boruta has been designed to be both __end-user and developer friendly__. With a high level of customization, it helps to have an immersive experience for your users giving them the interfaces you designed. The administration interface gives an exhaustive set of configuration switches that is also accessible through REST API calls for automation.

As an __open-source product__, it takes the advantage to being backed by a community of developers making it a secure and extensible solution. All suggestions, feature requests, or any kind of contribution will be very welcome.

> Have a look at the [GitHub repository](https://github.com/malach-it/boruta-server)

This server has been __designed for scalability__, the firsts load tests were performed at 1500 requests per second with a standard production server with no latency issues. The Erlang Virtual Machine used as a platform makes it also scallable in an horizontal way providing more machines and connecting them together.

## About gateways

boruta is __coupled to a gateway__ that acts as a __reverse-proxy__ sitting between your frontends and backends in order to __apply security rules__ in a fast and non-intrusive way. To perform those access restrictions, the gateway is based on boruta-provided access tokens and according granted scopes to mitigate the traffic and allows to get access to OpenID profile attributes in a secure way.

![Gateway authorization flow](/assets/images/authorization-gateway-en.png)

## Specifications and certifications

As it, a provider implemented using boruta aim to follow the RFCs from IETF:
- [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [RFC 7662 - OAuth 2.0 Token Introspection](https://tools.ietf.org/html/rfc7662)
- [RFC 7009 - OAuth 2.0 Token Revocation](https://tools.ietf.org/html/rfc7009)
- [RFC 7636 - Proof Key for Code Exchange by OAuth Public Clients](https://tools.ietf.org/html/rfc7636)

And specification from the OpenID Foundation:
- [OpenID Connect core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)

The initial beta release has been certified by the OpenID Foundation for the Basic, Implicit and Hybrid OpenID Provider profiles.

![OID certification mark](/assets/images/oid-certification-mark.png)

## Navigation

1. Understand how to configure the server in [provider configuration](provider-configuration/configure-clients.md)

2. Set up boruta into your infrastructure with [deployment](deployment/docker.md)

3. Have a better insight of the [gateway](gateway/reverse-proxying.md)

4. Get a deeper information about the [specifications](specifications/oauth-2.0/README.md)
