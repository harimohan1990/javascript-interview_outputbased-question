const a = true; 
const b = 1; 

console.log(a == b, a === b); 




/*  In JavaScript, the == operator checks for equality after performing type conversion if needed, while the === operator checks for equality without type conversion.

Let's break down the code:

const a = true; assigns the boolean value true to the constant variable a.
const b = 1; assigns the number 1 to the constant variable b.
Then, console.log(a == b, a === b); compares these two variables:

a == b: Since b is a number, JavaScript will attempt to convert a to a number. In JavaScript, true is equal to 1 when compared as numbers, so this will result in true.
a === b: This checks strict equality without type conversion. Since a is a boolean and b is a number, they are of different types, so this will result in false.
So, the output of console.log(a == b, a === b); 
will be true false.  

*/