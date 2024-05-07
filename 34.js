

let x = [1, 2, 3, 4, 5]; 
let y = x.filter((n) => n >= 3); 
  
console.log(y); 

/*   
Its create an array `x` containing numbers from 1 to 5, and then applies the `filter()` method to it. The `filter()` method creates a new array with all elements that pass the test implemented by the provided arrow function `(n) => n >= 3`.

This arrow function checks if each element `n` in the array `x` is greater than or equal to 3. If the condition `n >= 3` evaluates to `true` for an element, it is included in the new array.

Let's break down the filtering process:
- `[1, 2, 3, 4, 5]`
- `1 >= 3` returns `false`, so `1` is excluded.
- `2 >= 3` returns `false`, so `2` is excluded.
- `3 >= 3` returns `true`, so `3` is included.
- `4 >= 3` returns `true`, so `4` is included.
- `5 >= 3` returns `true`, so `5` is included.

Therefore, `y` will contain `[3, 4, 5]`. When you log `y` to the console, it will output `[3, 4, 5]`.
*/ 