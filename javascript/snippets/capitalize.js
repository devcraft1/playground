// capitalize all the words in a string
function capitalizeAll(str) {
    return str.toUpperCase()
}
console.log(capitalizeAll('string'));


// Capitalize first letter 
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('string'));
