# Configure scopes

## Definition

Scopes - as stated in [OAuth 2.0 specification](https://www.rfc-editor.org/rfc/rfc6749) - are made of a string that represent the capabilities the access token (AT) has. 

**Capabilities**, in the context of APIs, refer to the specific features and functions the API provides to developers. Capabilities allow to perform a range of actions, such as accessing and manipulating data, and integrating with different software applications or services.

**Scopes**, in that context, basically sets the **feature perimeter** the access token has on the resource server. 

:::note
Scopes are specific to each resource server (RS). This means the limits of what each scope covers, including its features and data, are decided by the resource server that uses the scope in its OAuth string representation. As an example, `users:manage:all` would give access to managing ability of the users resource with access to all users data scope.
:::

---

## Attributes

- __label__: a string that would be displayed discussing the scope, in a consent page for instance.
- __name__: a string representing the OAuth scope
- __public__: set if the scope is public or private, see below

---

## Public vs private scopes

This server sets a distinction between public and private scopes. 

All the OAuth scopes the server manages are to be listed on the scopes page allowing to create, update, or delete them. 

Setting the visibility of the scope helps to distinguish scopes that are accessible without restriction (public), and scopes that need specific access to get them (private). 

That access can be made at client, backend, and user levels.

---

## Roles

Roles are defined as a group of scopes which helps to give access to them more easily at backend or user levels.
