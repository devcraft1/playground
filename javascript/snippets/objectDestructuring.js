//simple example with object------------------------------
let obj = { names: "Max", age: 22, address: "Delhi" };

const { names, age } = obj;

console.log(names);
//expected output: "Max"

console.log(age);
//expected output: 22

console.log(address);
//expected output: Uncaught ReferenceError: address is not defined
