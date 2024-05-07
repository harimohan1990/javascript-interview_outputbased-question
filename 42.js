const a = { b: { c: 2 } }; 
const b = { ...a }; 
a.b.c = 3; 

console.log(b.b.c); 

/* 

In the provided code:

1. `const a = { b: { c: 2 } };` creates an object `a` with a nested object `b` containing a property `c` with the value `2`.
2. `const b = { ...a };` creates a new object `b` by spreading the properties of object `a`. This creates a shallow copy of `a`, meaning that while `b` will contain the same properties as `a`, any nested objects will be referenced rather than duplicated.
3. `a.b.c = 3;` updates the value of `c` inside the nested object `b` in object `a` to `3`.

When you log `b.b.c`, it accesses the `c` property inside the nested object `b` within object `b`.

Since `b` was created by spreading `a`, it initially has the same structure as `a`. Therefore, `b.b` refers to the same nested object as `a.b`. 

As a result, when you change the value of `c` inside `a.b`, it affects the same nested object referenced by `b.b`. 

So, `console.log(b.b.c)` will output `3`, because the change made to `a.b.c` also affects `b.b.c`.

*/ 