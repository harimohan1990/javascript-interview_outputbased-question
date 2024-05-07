let a = [10, 20, 30]; 
let b = [40, 50, 60]; 

console.log(a + b); 


/* 
When you use the `+` operator with arrays in JavaScript, it doesn't concatenate their elements directly. Instead, it converts the arrays to strings and then concatenates those strings.

Let's break it down:

- `let a = [10, 20, 30];` creates an array `a` with elements `[10, 20, 30]`.
- `let b = [40, 50, 60];` creates an array `b` with elements `[40, 50, 60]`.
- `console.log(a + b);` tries to concatenate arrays `a` and `b`.

The `+` operator, when used with arrays, converts them to strings and then concatenates them. So, `a` and `b` will be converted to strings before concatenation, resulting in `"10,20,3040,50,60"`.

Therefore, the output of `console.log(a + b);` will be:

```
10,20,3040,50,60
```


*/