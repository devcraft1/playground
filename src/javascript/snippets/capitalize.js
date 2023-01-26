// capitalize all the words in a string
function capitalizeAll(str) {
    return str.toUpperCase()
}

// Capitalize first letter 
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeAll('string'));
console.log(capitalizeFirstLetter('string'));
