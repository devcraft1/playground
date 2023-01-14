function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

var person = new Person("John Doe");
console.log(person.getName());

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// person
Person.prototype.nationality = "English";

var myFather = new Person("John", "Doe", 50, "blue");
console.log("The nationality of my father is " + myFather.nationality);
