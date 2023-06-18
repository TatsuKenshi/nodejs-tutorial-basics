// FS module allows us to interact with the filesystem
// There are two flavors - synchronous and asynchronous

// Here are asynchronous examples.

const { readFile, writeFile } = require("fs"); // destructured methods

// since this is an async method, it takes the file name, encoding, and a callback function
// callback function has two params - error and result

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");

// logs print in this order:
// start
// starting next task
// done with this task
