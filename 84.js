const obj = {
    a: 1,
    b: 2,
    c: {
      a: 3,
      b: 4,
    },
  };
  
  const {
    a,
    b,
    c: { a: nestedA },
  } = obj;
  
  console.log(a, b, nestedA);



  /*       
  

  The code snippet you provided shows an example of nested destructuring in JavaScript. It's used to extract multiple properties from an object `obj`, including nested objects, into individual variables. Let's break down how the destructuring works:

1. **Object `obj`**:
   - `obj` is an object containing properties `a`, `b`, and `c`.
   - `a` and `b` are simple properties with values 1 and 2, respectively.
   - `c` is a nested object with its own properties `a` and `b`, with values 3 and 4, respectively.

2. **Destructuring `obj`**:
   - The expression `const { a, b, c: { a: nestedA } } = obj;` is used to destructure `obj`.
   - `a` and `b` are extracted directly from the top level of `obj`. After this operation, `a` will have the value `1` and `b` will have the value `2`.
   - `c: { a: nestedA }` is used to extract the property `a` from the nested object `c` within `obj`. This value is then assigned to a new variable named `nestedA`. After this operation, `nestedA` will have the value `3`.

Here’s what each of the variables will hold after the destructuring:
- `a` will be `1` (extracted from the top level of `obj`).
- `b` will be `2` (also extracted from the top level of `obj`).
- `nestedA` will be `3` (extracted from the nested object `c`).

This method of destructuring is powerful for extracting deeply nested properties using a concise syntax. It’s particularly useful in scenarios like function parameters or when working with data returned from APIs where you only need specific pieces of a larger data structure.
  
  */