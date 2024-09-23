# Configure scopes

Scopes as stated in OAuth 2.0 specification are made of a string that represent the capabilities (an important word used in API security) the access token have. It basically set the feature perimeter the AT have on the reseource server, noting that scpoes are RS wise, the definition of the perimeter is specific to the RS that implements the resource scope both on feature than data of each OAuth scope string representation. As an example `users:manage:all` would give access to managing ability of the users resource with access to all users data scope.

## Attributes
- __label__: a string that would be displayed discussing the scope, in consent page for instance.
- __name__: a string representing the OAuth scope
- __public__: set if the scope is public or private, see below

## Public vs private scopes
This server set a distinction between public and private scopes. All the OAuth scopes the server manages are to be listed on the scopes page allowing to create, update, or delete them. Setting the visibility of the scope helps to distinguish scopes that are accessible without restriction (public), and scopes that need specific access to get them (private). That access can be made at client, backend, and user levels.

## Roles
Roles are defined as a group of scopes which helps to give access to them more easily at backend or user levels.
