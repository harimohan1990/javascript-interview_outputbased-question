let digit = 0;
console.log(digit++);
console.log(++digit);
console.log(digit);

/*          

output : 

0
2
2

explanation : 

The code snippet demonstrates the difference between the post-increment operator (`digit++`) and the pre-increment operator (`++digit`).

Here's what happens:

1. `console.log(digit++);`: This statement prints the current value of `digit`, which is `0`, and then increments `digit` by `1`. However, because `digit++` is a post-increment operator, it returns the original value of `digit` before the increment. So, it prints `0`.

2. `console.log(++digit);`: This statement increments `digit` by `1` first, then prints the updated value. Since `digit` was previously incremented by `1`, its value is now `1`. The pre-increment operator `++digit` increments `digit` and returns the updated value. So, it prints `1`.

3. `console.log(digit);`: This statement prints the current value of `digit`, which is `1`. This value was updated in the previous step.

Therefore, the output of the code will be:

```
0
2
2
```

This sequence of operations demonstrates the behavior of post-increment and pre-increment operators.

*/