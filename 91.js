const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b);


/*  

The code snippet you provided uses JavaScript's destructuring assignment to extract properties from an object `obj`. Here's how it works:

1. **Object Definition**:
   - `obj` is an object containing three properties: `a`, `b`, and `c`, with values `1`, `2`, and `3`, respectively.

2. **Destructuring Assignment**:
   - `const { a, b } = obj;` - This line uses object destructuring to extract the properties `a` and `b` from the object `obj` and assign their values to new constants also named `a` and `b`.
   - After this operation, `a` will hold the value `1`, and `b` will hold the value `2`. The property `c` is not destructured, so it is not assigned to any new variable.

3. **Console Output**:
   - `console.log(a, b);` - This line prints the values of `a` and `b` to the console.

The output of the `console.log(a, b);` statement will be:
```
1 2
```

This output reflects the values of the properties `a` and `b` that were extracted from the `obj` object using destructuring. This technique is particularly useful for accessing multiple properties of an object more succinctly and is widely used in scenarios where only specific elements from objects or arrays are needed.

*/



