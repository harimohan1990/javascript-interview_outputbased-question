function isInt(num) {
    return num % 1 === 0;
  }
  
  console.log(isInt(4)); // true
  console.log(isInt(12.2)); // false
  console.log(isInt(0.3)); // false


  /*  
The function `isInt(num)` you've defined checks whether a given number is an integer. The implementation uses the modulus operator (`%`) to determine this. Here's a breakdown of how it works:

### Function Explanation
- **`num % 1 === 0`**: This expression checks the remainder of `num` when divided by 1.
  - If `num` is an integer (like 4, 5, -3), the remainder when divided by 1 is 0.
  - If `num` is a decimal (like 4.5, 0.3, -2.7), the remainder is not 0.

### Code Analysis
- `return num % 1 === 0`: Returns `true` if the number is an integer (remainder is 0), and `false` otherwise.

### Function Calls and Outputs
1. **`isInt(4)`**:
   - **Calculation**: `4 % 1` equals `0`.
   - **Output**: `true` (4 is an integer).

2. **`isInt(12.2)`**:
   - **Calculation**: `12.2 % 1` equals `0.2`.
   - **Output**: `false` (12.2 is not an integer).

3. **`isInt(0.3)`**:
   - **Calculation**: `0.3 % 1` equals `0.3`.
   - **Output**: `false` (0.3 is not an integer).

### Conclusion
The function works effectively to determine if a number is an integer based on the remainder of the division by 1. This is a concise and commonly used method in JavaScript to check for integer values, utilizing the properties of the modulus operation. This method is efficient for all numerical inputs but should be used with caution for very large numbers or numbers in scientific notation due to potential floating point precision issues in JavaScript.


  */