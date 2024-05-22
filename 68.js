console.log(printName());
const printName = () => {
    return "Hi my name is hari"
}


/*       


In your JavaScript code, you're trying to call the function `printName()` before it is defined, which will result in an error due to the way JavaScript initializes variables and functions.

Here's a breakdown:

- The variable `printName` is declared using `const` and assigned a function (arrow function). In JavaScript, `const` variables are not initialized until the code execution reaches the line where they are defined. This means that they do not exist before their declaration is executed.
- When you attempt to call `printName()` before its declaration with `const`, JavaScript raises a `ReferenceError` because it treats `printName` as not yet existing.

The output of the code will be a runtime error:
```javascript
ReferenceError: Cannot access 'printName' before initialization
```

This error occurs because `const` (and `let`) variables are in a "temporal dead zone" from the start of the block until the point where they are declared, meaning they cannot be accessed in any way until they are declared.
Output : ReferenceError: Cannot access 'printName' before initialization
Reason : Arrow functions cannot be accessed before they are initialised.
*/