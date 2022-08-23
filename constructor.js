// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFriend = new Person("pavan", "kumar", 30, "black");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My friend is " + myFriend.age + "."; 