# Configure scopes | Roles

Roles are defined as a __set of scopes__ which helps to give access to them more easily at backend or user levels.

## Role parameters

<div class="parameters">

__Name__ is the name of the role, helping to identify it both in the administration interface than in user claims.

__Add a scope__ adds a scope to the role giving the list of accessible scopes.

</div>

## Manage through User Interface

The Administration interface gives the ability to create, update and delete clients. Clients are listed through the `Scopes > scope list` section in the sidebar menu.

![roles view](/assets/images/roles-list.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `clients:manage:all` granted.

> Have a look at [How to get restricted access](/docs/provider-configuration/management-api#get-an-access-token)

> Have a look at the [API documentation](/api/list-scopes)
