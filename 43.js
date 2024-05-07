let x = [1, 2, 3]; 
let [, , y] = x; 
  
console.log(y); 


/*  

In the provided code:

1. `let x = [1, 2, 3];` initializes an array `x` with three elements `[1, 2, 3]`.
2. `let [, , y] = x;` uses destructuring assignment to extract values from the array `x`. The commas `,` in the destructuring pattern indicate that the first two elements of the array are skipped, and the third element is assigned to the variable `y`.
3. `console.log(y);` prints the value of `y` to the console.

Since the first two elements of the array `x` are skipped, the value of the third element (which is `3`) is assigned to the variable `y`.

Therefore, `console.log(y);` will output `3`.


*/ 