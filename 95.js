multiply(5)(6);

/* 
function multiply(a) {
  return function(b) {
    return a * b;
  }
}

multiply(5)(6);

The `multiply` function you've provided is an example of a higher-order function in JavaScript that makes use of closures and currying. Here’s how it works:

### Function Structure and Execution
1. **Outer Function `multiply`**:
   - **Parameter `a`**: Takes a single argument `a`.
   - **Return Value**: Returns a new function, capturing the value of `a` within its scope.

2. **Inner Function**:
   - **Parameter `b`**: When the returned function is called, it takes another argument `b`.
   - **Return Value**: Returns the product of `a` and `b`.
   - This inner function has access to the `a` variable of the outer `multiply` function due to a closure. A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—aside from its own variables and global variables.

### Example Usage
- **`multiply(5)(6);`**:
  - **First Call `multiply(5)`**: Passes `5` as the argument to `multiply`. This call returns a new function that remembers `a` as `5`.
  - **Second Call `(6)`**: Invokes the returned function with `6` as the argument for `b`. The inner function calculates `5 * 6`.

### Output
- **Result**: The final output of `multiply(5)(6)` is `30`.

### Practical Application
This technique of writing functions is particularly useful in functional programming where functions are treated as first-class citizens. Currying is a functional technique that involves the use of higher-order functions. The ability to hold and remember environments (closures) makes this pattern powerful for tasks like partially applying functions, i.e., creating a new function by pre-filling some of the arguments to the existing function.

Here's a practical example in a clearer form:
```javascript
let double = multiply(2);  // Creates a new function that multiplies any input by 2
console.log(double(3));    // Output: 6
console.log(double(10));   // Output: 20
```
This shows how `multiply` can be used to create specific multiplier functions dynamically, which can be reused with different arguments.

*/