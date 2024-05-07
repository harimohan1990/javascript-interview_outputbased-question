let x = 0.1 + 0.2; 
let y = 0.3; 
console.log(x == y); 


/*
In JavaScript, numbers are internally represented as IEEE 754 double-precision floating-point format, which uses a binary representation. However, not all decimal numbers can be represented exactly in binary. As a result, there can be rounding errors when performing arithmetic operations on floating-point numbers.

When you add 0.1 and 0.2 in JavaScript, the result is a number very close to 0.3, but not exactly 0.3. This is due to the limited precision of floating-point arithmetic. When you perform operations on floating-point numbers, there can be small rounding errors that accumulate, leading to differences between the expected and actual results.

To mitigate this issue, you can use methods like rounding or comparing numbers with a tolerance threshold rather than strict equality. For example:


const result = 0.1 + 0.2;
const tolerance = 0.000001; // Define a tolerance threshold

if (Math.abs(result - 0.3) < tolerance) {
    console.log("0.1 + 0.2 is approximately 0.3");
} else {
    console.log("0.1 + 0.2 is not exactly 0.3");
}

*/