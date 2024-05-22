function sum(a=5, b=7){
    return a+b;
}
console.log(sum(undefined, 20));


/*  

In the JavaScript function `sum(a=5, b=7)` you provided, default parameters are used. This means that if the arguments are not provided, or are explicitly passed as `undefined`, the default values are used. Let's see how this works in your function call:

- **`sum(undefined, 20)`**: You're calling the `sum` function with the first argument as `undefined` and the second argument as `20`. 
  - Because the first argument is `undefined`, JavaScript uses the default value for `a`, which is `5`.
  - The second argument, `20`, is passed in place of `b`, replacing the default value of `7`.

The function then calculates the sum of `5` (default value for `a`) and `20` (provided value for `b`), resulting in:
- `a + b = 5 + 20 = 25`

Therefore, the output of your code will be:
```
25
```

*/ 