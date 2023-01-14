/* Non-mutating 
These are array methods that do not change the original array instead return a new array.
They include:
1. ForEach
2. Concat
3. Join
4. Map
5. IndexOf
6. Every
7. Some
8. Filter
9. Reduce
10. LastIndexOf
11. Slice
12. for
*/

// FOR EACH
// forEach with 2 arguments
const avengers = ["thor", "captain america", "hulk"];
avengers.forEach((item, index) => {
  console.log(index, item);
});

// forEach with 3 arguments
let colors = ["red", "blue", "green"];
colors.forEach(function (color, index, sourceArr) {
  console.log(index, color, sourceArr);
});

// CONCAT
let arr1 = [0, 1, 2];
let arr2 = [3, 5, 7];
let primes = arr1.concat(arr2);
console.log(primes);

// JOIN
var array = ["Joe", "Kevin", "Peter"];
array.join();
array.join("-");
array.join("");
array.join(". ");

// MAP
const posts = [
  { id: 1, title: " 1", description: "" },
  { id: 2, title: "2", description: "." },
  { id: 3, title: "3", description: "..." },
];
// ES2016+
// Create new array of post IDs. I.e. [1,2,3]
const postIds = posts.map((post) => post.id);
// Create new array of post objects. I.e. [{ id: 1, title: "Sample Title 1" }]
const postSummaries = posts.map((post) => ({ id: post.id, title: post.title }));

// INDEXOF
const imageList = [
  { value: 100 },
  { value: 200 },
  { value: 300 },
  { value: 400 },
  { value: 500 },
];
const index = imageList.findIndex((img) => img.value === 200);
console.log(index);

// EVERY
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true

const age = [2, 7, 12, 17, 21];
age.every(function (person) {
  return person > 18;
}); //false

// SOME
let obj = { num1: 1, num2: 2, num3: 3, num4: 4, num5: 5 };

var firstEven = null;

// Some returns a boolean value.
Object.values(obj).some((item) => {
  // Loop breaks as soon as the condition has been met.
  // Getting your value, can be used like:
  if (item == 2) {
    firstEven = item;
  }
  return item % 2 == 0;
}); // Results in true

// FILTER
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);

// REDUCE
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4

console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));

// LASTINDEXOF
// number
var numbers = [2, 5, 9, 2];
const xy = numbers.lastIndexOf(2);
console.log(xy);
numbers.lastIndexOf(7);
numbers.lastIndexOf(2, 3);
numbers.lastIndexOf(2, 2);
numbers.lastIndexOf(2, -2);
numbers.lastIndexOf(2, -1);

// string
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// expected output: 1

// SLICE
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

console.log(str.slice(0, 2));
// expected output: "the"
// Up to and including the last index!!!
// Different for python.

// for
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}
