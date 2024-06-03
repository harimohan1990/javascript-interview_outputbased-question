



console.log(sum(4, 6, 8, 10).value);  // Outputs: 28
console.log(sum(4)(6)(8)(10).value);  // Outputs: 28



/* 

function sum(...args) {
    const ans = args.reduce((a, b) => a + b, 0); //just to get sum of all the array elements
  
    const myFunc = (num) => {
      return sum(num, ...args);
    };
  
    myFunc.value = ans;
  
    return myFunc;
  }
  
  console.log(sum(4, 6, 8, 10).value); //output - 28
  console.log(sum(4)(6)(8)(10).value); //output - 28

  To achieve the behavior described in your example where `sum` can be invoked either with multiple arguments at once or chained with individual arguments, you need to define the function `sum` in a way that supports both multiple arguments and currying. Additionally, to access the result via `.value`, `sum` should return an object with a `value` property that holds the computed sum. Here’s how you can implement this in JavaScript:

1. **Multiple Arguments**: This can be handled using the `...args` syntax to collect all arguments passed to the function.
2. **Currying and Chaining**: This requires the function to return another function if it’s called with parentheses, but store a cumulative total if called with arguments.
3. **Accessing `.value`**: The returned object must have a `value` property containing the current sum.

Here's a possible implementation of such a function:

```javascript
function sum(...args) {
  // Initial function to handle the sum and the recursive function call
  const innerSum = (...innerArgs) => {
    return sum(...args, ...innerArgs);
  };

  // Calculate the total sum of current arguments
  innerSum.value = args.reduce((acc, cur) => acc + cur, 0);

  // Return a proxy to handle subsequent function calls or access to 'value'
  return new Proxy(innerSum, {
    get: (obj, prop) => (prop === 'value' ? obj.value : obj[prop])
  });
}
```

### Explanation:
- **Initial Function Call**: The function `sum` is defined to accept an arbitrary number of arguments. It then defines an `innerSum` function to accumulate values.
- **Reduce**: The current sum of the arguments is calculated using the `reduce` method.
- **Proxy**: A `Proxy` is used to intercept accesses to properties. If `.value` is accessed, it returns the sum. If the function is called again, it can handle more arguments or chain further due to the return of `innerSum`.

### Usage:
You can now use this function as shown in your example:
```javascript
console.log(sum(4, 6, 8, 10).value);  // Outputs: 28
console.log(sum(4)(6)(8)(10).value);  // Outputs: 28
```

This setup allows for the flexible usage patterns you outlined, enabling both direct multi-argument calls and chained curried calls.
*/
