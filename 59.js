console.log('1' - - '1'); 
console.log('1' + - '1');


/*   
Here's what each expression evaluates to:

console.log('1' - - '1'); returns 2. In this expression, the unary - operator coerces the strings '1' into the number 1. Then, - - '1' is essentially 1 - (-1), which equals 2.
console.log('1' + - '1'); returns '10'. In this expression, the unary - operator coerces the string '1' into the number 1, then it performs string concatenation because one operand is a string. So, '1' + (-1) results in the string '1-1'.

*/ 

