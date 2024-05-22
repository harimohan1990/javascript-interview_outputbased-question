const userDetails = {
    firstName: "Hari",
    lastName: "Mohan",
    age: 20,
    address: {
      city: "Hyderabad",
      country: "India",
    },
  };
  
  let cloneUserDetails = { ...userDetails };
  //Updating original object
  userDetails.age = 22;
  userDetails.address.city = "Banglore";
  
  console.log(cloneUserDetails.age); 
  console.log(cloneUserDetails.address.city);



  /*  
  
  The JavaScript code snippet you provided demonstrates object spreading and the behavior of shallow copying in JavaScript. Let's walk through what happens:

1. You create an object `userDetails` that contains personal details and a nested `address` object.
2. You then create `cloneUserDetails` using the spread operator `{...userDetails}`. This performs a shallow copy of `userDetails`. This means that top-level properties like `firstName`, `lastName`, and `age` are copied by value. However, the `address` object is copied by reference, not by value.

When you modify the `userDetails` object:
- Updating `userDetails.age = 22;` directly affects only the `userDetails` object. Since `age` is a primitive type, its change doesn't reflect in `cloneUserDetails`, which still sees the original value.
- Updating `userDetails.address.city = "Banglore";` affects the `address` object in both `userDetails` and `cloneUserDetails` because `address` is an object and is copied by reference. Thus, the change in city is seen in both the original and cloned objects.

Given this:

- `console.log(cloneUserDetails.age);` will output `20` because the `age` property was shallow copied and remains unaffected by changes to the original object.
- `console.log(cloneUserDetails.address.city);` will output `Banglore` because the `address` object is shared between the original and the clone due to the shallow copy, and any changes to it reflect in both.

Here are the outputs:
```
20
Banglore
```
  
  */ 