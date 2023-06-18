// FS module allows us to interact with the filesystem
// There are two flavors - synchronous and asynchronous

// Here are synchronous examples.

const { readFileSync, writeFileSync } = require("fs"); // destructured methods
console.log("start");

// readFileSync takes two arguments
// 1) path of the file,
// 2) encoding of the file
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// writeFileSync takes two arguments
// 1) file name (node creates it if it doesn't exist)
// 2) file content

// if file exists, the second argument can overwrite its content

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
  // third argument is the options argument. It's an object
  // {flag: "a"} appends the content of the second argument to the file specified in the first
);

console.log("done with this task");
console.log("starting the next task");
