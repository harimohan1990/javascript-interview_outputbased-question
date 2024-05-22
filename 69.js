console.log(10 - "5");
console.log("5" - 10);


/*   
In JavaScript, when you attempt to use arithmetic operations with a mix of numbers and strings, the JavaScript engine tries to convert the strings to numbers, if possible, to perform the operation. This is a part of JavaScript's type coercion.

Here's what happens with each operation:

1. `console.log(10 - "5");`
   - Here, `"5"` is a string that can be easily converted to the number `5`.
   - The subtraction operation then proceeds as `10 - 5`, which results in `5`.

2. `console.log("5" - 10);`
   - Similar to the first example, `"5"` is converted to the number `5`.
   - The operation then is `5 - 10`, which results in `-5`.

So, both operations successfully coerce the string `"5"` into a number and then perform the subtraction, resulting in outputs `5` and `-5`, respectively.


*/ 