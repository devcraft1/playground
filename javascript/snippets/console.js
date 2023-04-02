// Types of console use cases
console.log(console.log());
console.error(console.error());
console.warn(console.warn());
console.info(console.info());
console.debug(console.debug());

// console.table;
function Name(first, last) {
  this.first = first;
  this.last = last;
}

const john = new Name("john", "smith");
const jonah = new Name("jonah", "samuel");
const joseph = new Name("joseph", "seth");

console.table([john, jonah, joseph]);

// console.clear
console.clear();

// console.assert
const errMessage = "this is not the required number";
for (let number = 0; number <= 4; number++) {
  console.log("The number is " + number);
  console.assert(number % 2 == 0, { number, errMessage });
}

// console.dir
const user = {
  name: "string",
  class: 10,
};
console.dir(user);

// console.count
for (let count = 0; count > 4; count++) {
  let result = console.count();
  console.log(result);
}

// console.trace
function initial() {
  function inner() {
    console.trace();
  }
  inner();
}
initial();
