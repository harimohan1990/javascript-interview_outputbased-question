let x = false; 
let y = "0"; 
let z = 0; 
  
console.log(x == y); 
console.log(x == z); 

/* 



In JavaScript, when you use the loose equality operator (`==`), type coercion occurs, meaning JavaScript will attempt to convert values to the same type before comparing them.

Let's break down the comparisons:

1. `x == y`: 
   - `x` is a boolean (`false`).
   - `y` is a string (`"0"`).
   - When comparing a boolean to a string, JavaScript will attempt to convert both to a number.
   - `"0"` as a number is `0`.
   - `false` as a number is `0`.
   - Therefore, `false == "0"` evaluates to `true`.

2. `x == z`: 
   - `x` is a boolean (`false`).
   - `z` is a number (`0`).
   - When comparing a boolean to a number, JavaScript will attempt to convert the boolean to a number.
   - `false` as a number is `0`.
   - Therefore, `false == 0` evaluates to `true`.

So, both comparisons will evaluate to `true`. When you log the results to the console, you'll see `true` printed twice.







*/ 