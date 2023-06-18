// FS module allows us to interact with the filesystem
// There are two flavors - synchronous and asynchronous

// Here are asynchronous examples.

const { readFile, writeFile } = require("fs"); // destructured methods

// since this is an async method, it takes the file name, encoding, and a callback function
// callback function has two params - error and result
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  // else not needed because of the return
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    // else not needed because of the return
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
