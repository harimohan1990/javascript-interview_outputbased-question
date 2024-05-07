var num = 8;
var num = 10;
console.log(num);


/*  

In JavaScript, when you use the `var` keyword to declare a variable multiple times with the same name, it doesn't throw an error. Instead, it redeclares the variable. The value assigned to the variable will be the one from the most recent declaration. 

So, in the provided code:

```javascript
var num = 8;
var num = 10;
console.log(num);
```

The output will be:

```
10
```

Here, the variable `num` is initially declared and assigned the value `8`. Then, it is redeclared and assigned the value `10`. When you log `num`, it outputs the most recent value assigned to it, which is `10`.








*/