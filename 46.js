let x = 10; 
let y = 20; 

console.log("total = " + x + y); 

/*

In JavaScript, when using the `+` operator with strings, if either operand is a string, the other operand is converted to a string and concatenated.

Let's break down `"total = " + x + y`:

- `"total = "` is a string.
- `x` is the number `10`.
- `y` is the number `20`.

When concatenating strings and numbers using `+`, JavaScript converts the numbers to strings before concatenation. Therefore, `"total = " + x` results in the string `"total = 10"`, and then `"total = 10" + y` results in the string `"total = 1020"`.

So, `console.log("total = " + x + y);` will output `"total = 1020"`.


*/ 