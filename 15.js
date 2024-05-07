function checkAge() {
    'use strict';
    age = 21;
    console.log(age);
  }
  
  checkAge();

  //output 

//   "error"
// "ReferenceError: age is not defined

/* 
explanation 

In strict mode, referencing undeclared variables like `age` without declaring them first will result in a reference error. 

In the provided code:

```javascript
function checkAge() {
    'use strict';
    age = 21;
    console.log(age);
}

checkAge();
```

The line `'use strict';` enables strict mode within the function `checkAge()`. When you try to assign a value to `age` without declaring it using `var`, `let`, or `const`, strict mode will throw a reference error because it requires variables to be explicitly declared before use.

So, when you call `checkAge()`, it will throw a reference error: `ReferenceError: age is not defined`. This occurs because `age` is referenced without being declared first.


*/