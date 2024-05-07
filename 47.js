const arr = [1, 2, 3]; 
arr.forEach((num) => num * 2); 

console.log(arr); 


/*  


In the provided code:

1. `const arr = [1, 2, 3];` initializes an array `arr` with three elements `[1, 2, 3]`.
2. `arr.forEach((num) => num * 2);` uses the `forEach()` method to iterate over each element of the array `arr`. For each element `num`, it multiplies `num` by `2`. However, this operation doesn't change the original array because `forEach()` doesn't modify the array elements directly.
3. `console.log(arr);` prints the array `arr` to the console.

Since the `forEach()` method doesn't modify the array elements directly, the array `arr` remains unchanged after the `forEach()` loop.

Therefore, `console.log(arr);` will output `[1, 2, 3]`, the original array `arr`.








*/ 