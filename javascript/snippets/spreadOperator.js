// Spread operators for Array
// string
const name = 'Zelda';
const letters = [...name];
console.log(letters);

// numbers
const amount = [100000, 10, 20];
const numbers = [...amount];
console.log(numbers);


// Spread operators for Object
// string
const person = {
    name: 'Zelda',
    age: 20,
};
const person2 = {
    ...person,
    name: 'Link',
};
console.log(person2);