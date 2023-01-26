//typeof() will return the type of value in its parameters.
//example of a practical usage
function checkType(value) {
  if (typeof (value) === "string") return "string";
  if (typeof (value) === "number") return "number";
  if (typeof (value) === "boolean") return "boolean";
  if (typeof (value) === "undefined") return "undefined";
  if (typeof (value) === "object") return "object";
  if (typeof (value) === "function") return "function";
  if (typeof (value) === "symbol") return "symbol";
  if (typeof (value) === "bigint") return "bigint";
}

console.log(checkType("string"));
console.log(checkType(true));
console.log(checkType(1));
console.log(checkType(undefined));
console.log(checkType({}));
console.log(checkType(() => { }));
console.log(checkType(Symbol()));
console.log(checkType(BigInt(1)));
