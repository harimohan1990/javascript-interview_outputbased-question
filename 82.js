



let x = 10;

function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}

outer();


/*

The behavior of the code you've shared involves JavaScript's hoisting mechanism within function and block scopes. Let's go through the code step-by-step:

1. A variable `x` is declared using `let` and initialized to 10 in the global scope.
2. A function `outer` is defined, which contains a `console.log(x)` statement and a conditional block.
3. Within the conditional block (which never executes because the condition is `false`), there is a declaration `var x = 20;`.

Here's the tricky part about JavaScript's hoisting and scoping:

- The `var x = 20;` inside the `if` block is hoisted to the top of the function `outer`, but only as a declaration, not the initialization. This is because `var` declarations are function-scoped, not block-scoped.
- However, the initialization (`= 20`) is not hoisted and only occurs where it's written, which in this case is inside an `if` block that never executes.

Because of this hoisting, when `console.log(x)` is executed, the local `x` declared within `outer` (but not initialized) shadows the global `x`. Since this local `x` is declared but not initialized (due to the condition `false` not allowing the `x = 20` assignment to execute), it is `undefined` at the point where `console.log(x)` is called.

So, the output of `outer()` will be:
```
undefined
```

This demonstrates the nuances of JavaScript's variable hoisting and scoping rules.


*/