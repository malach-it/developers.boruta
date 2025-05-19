# Global configuration | Error templates

While the user navigates through authentication or authorization, he can __encounter errors__. Naigation errors depend on the HTTP status, templates are provided for each of those. You can edit them to have a __complete coverage of where the user can navigate to__.

## Error templates

<div class="parameters">

__Bad request__ encountered when the user emits a bad request.
- __reason.message__ variable is available on the bad request template. It gives the current error message.

__Forbidden__ encountered when the user is forbidden to access the page.
- __reason.message__ variable is available on the forbidden template. It gives the current error message.

__Not found__ encountered when the requested page is not found.
- __reason.message__ variable is available on the not found template. It gives the current error message.

__Internal server error__ encountered when the server crashes.
- __reason.message__ variable is available on the internal server error template. It gives the current error message.

</div>

## Manage through User Interface

The Administration interface gives the ability to create, update and delete backends. Backends are listed through the `Configuration > error templates` section in the sidebar menu.

![error templates view](/assets/images/error-templates.png)

## Manage through API

All client operations are accessible through a REST API following the below description. All client management endpoints are protected with a Bearer token that can be obtained with any OAuth flow. In order to get access, you need to have an access token with the [private](provider-configuration/configure-scopes.md#public-vs-private-scopes) scope `clients:manage:all` granted.

> Have a look at [How to get restricted access](/docs/provider-configuration/management-api#get-an-access-token)

> Have a look at the [TODO - API documentation](/api/list-scopes)
