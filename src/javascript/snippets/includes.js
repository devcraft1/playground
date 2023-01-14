const arr = [1, 2, 3, 4, 5, 6];
if (arr.includes(1)) {
  console.log('is included');
}

const array = ['string', 'number', 'boolean', 'null', 'object'];
if (array.includes('strin')) {
  console.log('is included');
} else if (!array.includes('strin')) {
  console.log('strin can not be found in array');
}
