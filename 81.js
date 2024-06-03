const person = {
    name: "John",
    age: 30,
  };
  
  Object.freeze(person);
  person.age = 40;
  
  console.log(person.age);


  /*  

  An object person is created with properties name set to "John" and age set to 30.
Object.freeze(person) is called, which makes the person object immutable. This means no properties can be added, removed, or modified.
The code then attempts to change the age property of the person object to 40. However, because the object is frozen, this modification will not be successful.
console.log(person.age) outputs the age property of the person object.

30
  
  */