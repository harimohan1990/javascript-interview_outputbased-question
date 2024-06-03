const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);

/*  
The code creates an array arr1 with the values [1, 2, 3]. It then creates a new array arr2 using the spread syntax (...) to spread the values of arr1 into a new array.

arr2.push(4) adds the value 4 to the end of arr2.

However, arr1 remains unchanged because arr2 is a new array with its own reference to the values of arr1. This is known as creating a shallow copy of the array.


*/