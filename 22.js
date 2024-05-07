let x = [1, 2, 3]; 
let y = x.map((x, i) => x + i); 
  
console.log(y); 

/*   Output
[ 1, 3, 5 ]
Explanation: x is initialized as an array with values [1, 2, 3]. The map method is called on x with an arrow function as its argument. The arrow function takes two arguments, x which represents the value of the current element, and i which represents the index of the current element. The arrow function returns x + i, which adds the index i to the value of each element x. The resulting array [1, 3, 5] is assigned to the variable y. The console.log method is called with the argument y, which outputs the value [1, 3, 5] to the console.
Therefore, the final output of the code is the array [1, 3, 5]


*/


