const fs = require('fs');

const filePath = 'text.txt';

fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
    if (err) throw err;
    console.log(data);
})

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}

console.log('sum:', sum);

