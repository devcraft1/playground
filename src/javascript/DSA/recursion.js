// Recursion occurs when a  function calls itself

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(3, 3)); // 27

const countdown = function (value) {
  if (value > 0) {
    console.log(value);
    return countdown(value - 1);
  } else {
    return value;
  }
};
console.log(countdown(10));
