let x = true; 
let y = false; 

console.log(x + y); 

/* 
In JavaScript, when you perform an arithmetic operation involving boolean values, they are implicitly converted to numbers. `true` is converted to `1` and `false` is converted to `0`. Therefore, `x + y` will result in `1 + 0`, which equals `1`. 

So, when you run `console.log(x + y);`, it will output `1`.

*/