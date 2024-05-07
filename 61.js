function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 });


  /* 
Sure! Let's analyze what each part of the function does:

```javascript
function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
}
```

In this function:

- The `checkAge` function takes an object `data` as an argument.
- It then compares `data` with `{ age: 18 }` using strict equality `===`. If they are not the same object in memory, the condition inside the first `if` statement will evaluate to false.
- Next, it compares `data` with `{ age: 18 }` using loose equality `==`. If they are not the same object in memory, this condition will also evaluate to false.
- If neither of the above conditions is met, it goes to the `else` block and prints `"Hmm.. You don't have an age I guess"`.

Given that `data` is `{ age: 18 }`, let's see what the output will be:

- The first `if` condition checks if `data` is strictly equal to `{ age: 18 }`, but they are not the same object in memory, so this condition will be false.
- The second `if` condition checks if `data` is loosely equal to `{ age: 18 }`, but again, they are not the same object in memory, so this condition will also be false.
- Therefore, the function will execute the `else` block and print `"Hmm.. You don't have an age I guess"`.

So, the output will be:
```
Hmm.. You don't have an age I guess
```


  */