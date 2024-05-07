let a = () => { 
    console.log(this); 
  }; 
    
  a(); 


  /* 
  In JavaScript, when you use an arrow function (=>), it doesn't bind its own this context like traditional functions do. Instead, it captures the this value from its surrounding lexical context. In this case, since you're using an arrow function inside the global scope or inside another function, its this context will be the same as the enclosing context, which is typically the global object (window in browsers, global in Node.js) if it's not inside any other function.

So, when you call a(), it logs the this context at the point where the arrow function was defined. If you're running this code in a browser environment, it would log the window object. If you're running it in Node.js, it would log the global object.

In short, it will log the global object (window or global, depending on the environment) to the console.
  
  
  */

