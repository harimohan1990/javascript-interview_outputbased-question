console.log(1 == '1');
console.log(false == '0');
console.log(true == '1');
console.log('1' == '01');
console.log(10 == 5 + 5);


/*              
In JavaScript, when using the double equals (`==`) operator, type coercion occurs, which means that JavaScript attempts to convert the operands to the same type before comparing them. Here are the results of each comparison:

1. `console.log(1 == '1');` returns `true`. JavaScript coerces the string `'1'` to the number `1` before comparing, so `1` is equal to `1`.

2. `console.log(false == '0');` returns `true`. JavaScript coerces the string `'0'` to the boolean `false` before comparing, so `false` is equal to `false`.

3. `console.log(true == '1');` returns `true`. JavaScript coerces the string `'1'` to the boolean `true` before comparing, so `true` is equal to `true`.

4. `console.log('1' == '01');` returns `true`. Both operands are strings, so they are compared directly. The strings are equal.

5. `console.log(10 == 5 + 5);` returns `true`. JavaScript evaluates `5 + 5` to `10`, so the expression becomes `10 == 10`, which is `true`.

*/ 