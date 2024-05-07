const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);


/*

In JavaScript, when you define an object with duplicate keys, the last occurrence of a key assignment overrides the earlier ones. Therefore, in your code:

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

The key `a` is assigned the value `'three'`, so when you log the `obj`, you'll see:

```
{ a: 'three', b: 'two' }
```

The earlier assignment of `'one'` to `a` is overwritten by the later assignment of `'three'`.



*/ 