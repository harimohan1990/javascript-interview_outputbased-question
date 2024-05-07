function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(1, '3'));


/*  

In JavaScript, the `+` operator is used both for arithmetic addition and string concatenation. When one of the operands is a string, JavaScript tries to convert the other operand to a string and then performs concatenation.

In the provided code:

```javascript
function sum(a, b) {
    return a + b;
}

console.log(sum(1, '3'));
```

The function `sum` takes two parameters `a` and `b` and returns their sum. 

When you call `sum(1, '3')`, `1` is a number, but `'3'` is a string. JavaScript performs type coercion to convert the number `1` into a string and then concatenates it with the string `'3'`. 

So, the expression `1 + '3'` results in the string `'13'`.

Therefore, the output of the code will be:

```
'13'
```

The result is a string because the `+` operator, when used with a string operand, performs string concatenation in JavaScript.



*/