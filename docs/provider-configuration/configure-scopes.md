# Configure scopes

Scopes as stated in OAuth 2.0 specification are made of a string that represent the __capabilities the access token (AT) have__. It basically set the feature perimeter the AT have on the reseource server (RS), noting that scpoes are RS wise, the definition of the perimeter is specific to the RS that implements the resource scope both on feature than data of each OAuth scope string representation. As an example `users:manage:all` would give access to managing ability of the users resource with access to all users data scope.

## Scope parameters

<div class="parameters">

__label__ a string that would be displayed discussing the scope, in consent page for instance.

__name__ a string representing the OAuth scope

__public__ set if the scope is public or private, see below

</div>

## Public vs private scopes
This server set a __distinction between public and private scopes__. All the OAuth scopes the server manages are to be listed on the scopes page allowing to create, update, or delete them. Setting the visibility of the scope helps to distinguish scopes that are __accessible without restriction__ (public), and scopes that __need specific access__ to get them (private). That access can be made at client, backend, and user levels.

## Manage through User Interface

The Administration interface gives the ability to create, update and delete clients. Clients are listed through the `Scopes > scope list` section in the sidebar menu.

![scope view](/assets/images/oauth-scopes-list.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `clients:manage:all` granted.

> Have a look at [How to get restricted access](management-api#get-an-access-token)

> Have a look at the [API documentation](/api/list-scopes)
