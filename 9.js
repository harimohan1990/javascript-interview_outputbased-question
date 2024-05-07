const a = [10, 20, 30]; 
const b = [...a]; 
b.push(40); 

console.log(a); 


/*This output remains unchanged from the original array a, despite b being modified by pushing 40 into it. The spread operator (...) creates a shallow copy of a when initializing b, so modifying b does not affect the original array a. Therefore, a retains its original values [10, 20, 30]. */