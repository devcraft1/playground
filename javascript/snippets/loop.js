// for loop

// for - loops through a block of code a number of times.
// for/in - loops through the properties of an object.
// for/of - loops through the values of an iterable object.
// while - loops through a block of code while a specified condition is true.

var listItem = [
  { name: "myName1", gender: "male" },
  { name: "myName2", gender: "female" },
  { name: "myName3", gender: "male" },
  { name: "myName4", gender: "female" },
];

// for loop
for (let i = 0; i < listItem.length; i++) {
  console.log(listItem[i]);
}

for (const iterator of listItem) {
  console.log(iterator);
}

for (property in listItem) {
  // console.log(property);
  console.log(`${property}:${listItem[property]}`);
}

// while loop
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
//Alternatively, You could  break out of a loop like so:
var i = 0;
while (true) {
  i++;
  if (i === 3) {
    break;
  }
}

// do while
let text;
var i = 0;
do {
  text += "The number is " + i;
  i++;
} while (i < 5);
