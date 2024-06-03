function calculateSum() {
    console.log(result);
    var num1 = 5;
    let num2 = 10;
    const num3 = 15;
    var result = num1 + num2 + num3;
  }
  
  calculateSum(); 

/*   


The code snippet you've shared highlights an interesting aspect of JavaScript's variable hoisting behavior within a function. Let's go through the `calculateSum` function and understand what happens when it is executed:

1. **Variable Declarations and Hoisting**:
   - The function `calculateSum` contains declarations for `num1`, `num2`, `num3`, and `result`.
   - Due to JavaScript's hoisting mechanism, the `var` declared variables (`num1` and `result`) are hoisted to the top of their enclosing function. This means that they are declared (but not initialized) before any code in the function is executed. The `let` and `const` declarations (`num2` and `num3`), however, are not initialized until their actual declaration lines are reached.

2. **Execution Flow**:
   - At the point where `console.log(result);` is executed, `result` has been hoisted but not initialized. Therefore, it is `undefined`.
   - Then, `num1`, `num2`, and `num3` are initialized with the values `5`, `10`, and `15`, respectively.
   - After initializing these variables, `result` is assigned the value of `num1 + num2 + num3`, which sums up to `30`.

3. **Output**:
   - When `console.log(result);` is called, since `result` has not yet been assigned a value (only declared due to hoisting), it outputs `undefined`.
   - Thereafter, `result` is calculated as `30` but this happens after the `console.log` statement.

Given this sequence of operations, the output of the `calculateSum()` function will be:
```
undefined
```

This output occurs because `result` is logged before it is initialized and assigned a value. This demonstrates the importance of understanding variable scoping and hoisting in JavaScript to predict and control the behavior of code accurately.

*/