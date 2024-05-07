let x = true; 
let y = false; 
let z = x + y && x * y; 

console.log(z); 


/*  
Let's evaluate the expression step by step:

1. `x + y`: 
   - `true` is converted to `1`.
   - `false` is converted to `0`.
   - `1 + 0` equals `1`.

2. `x * y`: 
   - `true` is converted to `1`.
   - `false` is converted to `0`.
   - `1 * 0` equals `0`.

3. `x + y && x * y`: 
   - The `&&` operator has higher precedence than the `+` operator.
   - `x + y` evaluates to `1`.
   - `x * y` evaluates to `0`.
   - `1 && 0` returns `0` because both operands are truthy and the `&&` operator returns the second operand if the first operand is truthy.

Therefore, `z` will be `0`. When you log `z` to the console, it will output `0`.

*/