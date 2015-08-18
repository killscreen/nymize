<a name="module_nymize"></a>
## nymize ⇒ <code>function</code>
Create a function which will provide named instances of some
other kind of object. The created function will use the provided 
factory to create new instances of those objects. The created 
function will always return values provided by the factory; the 
resulting instances will vary depending on the `name` argument 
provided to the created function:

* If a name is provided, the resulting instance will be the same
  instance that was returned the last time the created function 
  was called with that name, except in the case where there is no
  "last time"; then it will be a new instance.
* If no name is provided, a new "anonymous" instance will be provided.
  The same instance will never be returned again.

**Returns**: <code>function</code> - an instantiation function.  

| Param | Type | Description |
| --- | --- | --- |
| factory | <code>function</code> | a factory to return instances. |

