const person = { first_name: "bill", age: 20 };
if (person.hasOwnProperty("first_name")) {
  console.log("person has a first_name property");
} else {
  console.log("false");
}

const persons = {
  first_name: "Bob",
  last_name: "Dylan",
};
console.log(persons.hasOwnProperty("first_name"));
console.log(persons.hasOwnProperty("age"));

o = new Object();
o.propOne = null;
o.hasOwnProperty("propOne"); // returns true
o.propTwo = undefined;
o.hasOwnProperty("propTwo");

var foo = {
  hasOwnProperty: function () {
    return false;
  },
  bar: "I belong to foo",
};
console.log(foo.bar);
console.log(foo.hasOwnProperty);
