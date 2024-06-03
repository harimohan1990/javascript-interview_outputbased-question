let a = {
    x: 1,
    y: 2,
  };
  let b = a;
  a.x = 5;
  console.log(a);
  console.log(b);

  /* 
  Answer - {x:5, y:2} {x:5, y:2}

JavaScript objects are passed by reference. So when we assigned a object to b. b also pointing to the same object in memory. When we change the value of a.x it also affects b.x
  
  */