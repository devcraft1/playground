const { resolve } = require("path/posix");

function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am ${name}`);
    }, 2000);
  });

}
async function async_msg() {
  try {
    const name = "unknown";
    let msg = await hello(name);
    console.log(msg);
  } catch (e) {
    console.log("Error!", e);
  }
}
async_msg(); //output - I am unknown.
