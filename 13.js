let x = [1, 2, 3]; 
let y = x.slice(); 

console.log(y, x === y); 

// output 
[1, 2, 3]
false


/*    
The code creates a shallow copy of array `x` using the `slice()` method and assigns it to the variable `y`. Then, it logs both arrays `y` and `x`, as well as a comparison between them using the strict equality operator (`===`).

The output of the code will be:

```
[1, 2, 3] false
```

Explanation:

- `y` is a shallow copy of array `x`, so it contains the same elements `[1, 2, 3]`.
- When comparing `x === y`, it checks if both variables reference the same array object. Since `y` is a shallow copy of `x`, it refers to a different array object in memory. Therefore, the comparison `x === y` evaluates to `false`.



*/ 