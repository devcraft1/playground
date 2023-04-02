// Using a javascript library
const Cryptr = require("cryptr");

const cryptr = new Cryptr("myTotalySecretKey");

const encryptedString = cryptr.encrypt("bacon");

const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString);
console.log(decryptedString);