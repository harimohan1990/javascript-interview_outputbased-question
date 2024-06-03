let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);


/*  

In your code snippet, you're manipulating and reassigning JavaScript objects and their properties, then observing the effects of these operations. Here's a detailed breakdown of what happens:

1. **Object Initialization**:
   - `let obj1 = { key: "value" };` creates an object `obj1` with a property `key` that has the value `"value"`.
   - `let obj2 = obj1;` assigns `obj2` to the same reference as `obj1`. Now, both `obj1` and `obj2` point to the same object.
   - `let obj3 = obj2;` assigns `obj3` to the same reference as `obj2`. Now, `obj1`, `obj2`, and `obj3` all point to the same object.

2. **Modifying Object Properties**:
   - `obj1.key = "new value";` changes the `key` property of the object pointed to by `obj1` to `"new value"`. Since `obj1`, `obj2`, and `obj3` reference the same object, the `key` property for all of them now reflects this new value.

3. **Reassigning obj2**:
   - `obj2 = { key: "another value" };` creates a new object and assigns it to `obj2`. This new object has a `key` property with the value `"another value"`. This action breaks the reference link between `obj2` and the original object that `obj1` and `obj3` still point to. `obj2` now points to a completely different object.

4. **Final State**:
   - `obj1` and `obj3` still reference the first object, whose `key` property was modified to `"new value"`.
   - `obj2` now references a new object with the `key` property set to `"another value"`.

5. **Console Output**:
   - When you `console.log(obj1.key, obj2.key, obj3.key);`, the output will reflect the current state of each reference:
     - `obj1.key` prints `"new value"` — Reflects the change made when `obj1.key` was set to `"new value"`.
     - `obj2.key` prints `"another value"` — Reflects the new object that `obj2` was reassigned to.
     - `obj3.key` prints `"new value"` — Reflects the unchanged reference to the original object that `obj1` modified.

The output of this code will therefore be:
```
new value another value new value
```
This output demonstrates how object references work in JavaScript and the impact of reassigning one reference to a new object while others continue to point to the original object.

*/