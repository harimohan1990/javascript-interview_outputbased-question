var x = +true;
var y = !'Hari';

console.log(x,y)



/*


In JavaScript, unary operators like the plus sign (`+`) and the logical NOT (`!`) coerce their operands to numbers and boolean values respectively.

Let's evaluate the expressions:

1. `+true`: The unary plus operator coerces the boolean value `true` to a number. In JavaScript, `true` is equivalent to `1`. So, `+true` evaluates to `1`.

2. `!'Hari'`: The logical NOT operator negates the truthiness of its operand. In JavaScript, non-empty strings are considered truthy, so `'Hari'` is truthy. When you apply logical NOT (`!`) to a truthy value, it returns `false`. So, `!'Hari'` evaluates to `false`.

Therefore, the output of the code will be:

```
1 false
```

This means `x` is `1` and `y` is `false`. */