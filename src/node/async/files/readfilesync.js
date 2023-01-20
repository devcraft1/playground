const fs = require('fs');

const filePath = 'text.txt';

const data = fs.readFileSync(filePath, { encoding: "utf8" })

console.log('data', data);

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log('sum', sum);


