function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Hari';
    let age = 12;
  }
  
  sayHi();


  /*                  

undefined
"error"
"ReferenceError: Cannot access 'age' before initialization


In JavaScript, variables declared with `var` are hoisted to the top of their scope (either function scope or global scope), meaning that the declaration is moved to the top of the function or global context during the compilation phase, while the initialization remains in place. However, variables declared with `let` or `const` are not hoisted in the same way; they are hoisted to the top of their block scope, but they are not initialized until their declaration statement is evaluated during runtime. This is known as the temporal dead zone.

In the provided function `sayHi()`:

```javascript
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Hari';
    let age = 12;
}

sayHi();
```

The variable `name` is declared using `var`, while `age` is declared using `let`.

When you call `sayHi()`, you'll encounter `undefined` for `name` and an error for `age`. Here's why:

1. `name` is declared using `var`, so it is hoisted to the top of the function scope. However, it is not initialized until the line where it is assigned the value `'Hari'`. Therefore, when you try to log `name` before its initialization, it will output `undefined`.

2. `age` is declared using `let`, which means it is hoisted to the top of the block scope of the `sayHi()` function, but it is not initialized until its declaration statement. Since you're trying to log `age` before its declaration, it will result in a reference error due to the temporal dead zone.

So, when you execute `sayHi()`, you'll see `undefined` logged for `name`, and an error will be thrown for `age`.

  */