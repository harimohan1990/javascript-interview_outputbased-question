const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));

/*
The function `addFoo` you've provided is designed to manipulate and return results based on the properties of the objects passed to it. Let's break down the operation and expected output of your code:

### Understanding the Code:

1. **Object Declarations**:
   - `const x = { foo: 1 };` - This line creates an object `x` with a property `foo` set to the value `1`.
   - `const y = { foo: 2 };` - This line creates another object `y` with a property `foo` set to the value `2`.

2. **Function Declaration**:
   - **`addFoo(obj)`**: A function that takes an object `obj` as a parameter.
     - **Operation**: It accesses the `foo` property of the object, adds `1` to it, and returns the result.
     - **Return Value**: `obj.foo + 1`.

3. **Function Calls and Console Output**:
   - **`console.log(addFoo(x));`** - When `x` is passed to `addFoo`, the function reads `x.foo` (which is `1`), adds `1` to it, and returns `2`.
   - **`console.log(addFoo(y));`** - When `y` is passed to `addFoo`, the function reads `y.foo` (which is `2`), adds `1` to it, and returns `3`.

### Code Output:

- **First `console.log` Call**: Outputs `2` because `addFoo(x)` processes `1 + 1`.
- **Second `console.log` Call**: Outputs `3` because `addFoo(y)` processes `2 + 1`.

### Summary:

This code effectively demonstrates how to pass objects to functions and manipulate their properties. The `addFoo` function is straightforward and operates reliably on the structure of the input objects, assuming the `foo` property exists and is a number. This approach is commonly used in JavaScript to handle configurations or data models where operations are performed based on the properties of passed objects.


*/