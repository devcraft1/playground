
const params = [1, 2, 3, 4, 5, 56, 6];

function restOperatorFunc(...args) {
  return args;
};

console.log(restOperatorFunc(...params));


function restOperatorFunc2(...args) {
  return args.reduce((acc, curr) => acc + curr);
};

console.log(restOperatorFunc2(...params));

