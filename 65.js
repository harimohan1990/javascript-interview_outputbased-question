const a = {x : 1};
const b = {x : 1};
console.log(a === b);
console.log(a.x === b.x)


/*              there are two `console.log` statements that compare two objects, `a` and `b`, and a property of those objects, respectively. Here's what each statement does and what it will output:

1. `console.log(a === b);`
   - This checks if object `a` and object `b` are the same object in memory. In JavaScript, two objects are considered equal only if they reference the exact same object (i.e., they are the same instance). In your code, `a` and `b` are two different objects that happen to have the same properties, but they are not the same instance.
   - **Output:** `false`

2. `console.log(a.x === b.x);`
   - This compares the value of the `x` property of both `a` and `b`. Since both `x` properties are set to `1`, this comparison checks if `1` is equal to `1`, which is true.
   - **Output:** `true`

Thus, the output of your code will be:
```
false
true
``` */