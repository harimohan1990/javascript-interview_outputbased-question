console.log(10 + "5");
console.log("5" + 10);


/*   

In JavaScript, when you use the `+` operator with a number and a string, JavaScript performs type coercion, converting the number into a string and then concatenating the two strings. This behavior is consistent regardless of the order of operands, as long as one is a string and the other is a number. Here’s what happens for each statement:

1. `console.log(10 + "5");`
   - The number `10` is converted to the string `"10"`.
   - JavaScript then concatenates `"10"` and `"5"` to produce `"105"`.

2. `console.log("5" + 10);`
   - The number `10` is converted to the string `"10"`.
   - JavaScript then concatenates `"5"` and `"10"` to produce `"510"`.

Thus, the output of your code will be:
```
105
510
```

*/ 