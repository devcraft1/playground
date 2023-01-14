/* Mutating 
These are array methods that change the original array they are called upon
They include:
1. push
2. pop
3. shift
4. unshift
5. sort
6. reverse
7. splice
*/

// PUSH
let animals = ['dog', 'cat', 'tiger'];
console.log(animals.push('elephant'));

// POP
console.log(animals.pop());

// UNSHIFT
console.log(animals.unshift('cow'));

// SHIFT
console.log(animals.shift());

// SORT
var names = ['Peter', 'Emma', 'Jack', 'Mia', 'Eric'];
names.sort(); // ["Emma", "Eric", "Jack", "Mia", "Peter"]

var objs = [
  { name: 'Peter', age: 35 },
  { name: 'Emma', age: 21 },
  { name: 'Jack', age: 53 },
];

objs.sort(function (a, b) {
  return a.age - b.age;
}); // Sort by age (lowest first)

// REVERSE
const list = [1, 2, 3, 4, 5];
list.reverse();

// SPLICE
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
