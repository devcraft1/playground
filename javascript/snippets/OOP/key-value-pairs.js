/*A key-value pair is two linked data items: a key, which is a unique identifier for some item of data, and the value, which is either the data that is identified or a pointer to the location of that data.";*/
const testScore = {
  damon: 89,
  shawn: 91,
  keenan: 80,
  kim: 89,
};

Object.keys(testScore); // gives all keys
Object.values(testScore); // gives all values
Object.entries(testScore); // gives nested arrays of key-value pairs
