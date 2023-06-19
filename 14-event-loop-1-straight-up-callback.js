// event loop

// The event loop is what allows node.js to perform non-blocking I/O (input/output) operations - despite the fact that JavaScript is single threaded - by offloading operations to the system kernel whenever possible.

// node.js (JS in general) first runs immediate code, and only then it runs asynchronous code (regardless of how small and even if the timeout is 0).

// event loop takes in a request, registers a call back, and only after the request is complete, it executes the callback function (callback function gets executed only after all immediate code is executed).

//
// // // example 1 - straight up callback function
//

const { readFile } = require("fs");

console.log("started the first task");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");

// log order
// "started the first task"
// the code in readFile's callback function gets offloaded and we're waiting for it to determine whether ther's an error or not
// "starting next task" gets logged
// readFile finishes it's calculations and gives us the result
// here, "Hello, this is first text file" is logged because "./content/first.txt" with "utf-8" encoding does exist.
// "completed firs task" gets logged
