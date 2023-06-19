// event loop

// The event loop is what allows node.js to perform non-blocking I/O (input/output) operations - despite the fact that JavaScript is single threaded - by offloading operations to the system kernel whenever possible.

// node.js (JS in general) first runs immediate code, and only then it runs asynchronous code (regardless of how small and even if the timeout is 0).

// event loop takes in a request, registers a call back, and only after the request is complete, it executes the callback function (callback function gets executed only after all immediate code is executed).

//
// // // example 3 - setInterval
//

setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("I run first");

// process stays alive unless
// kill process with Ctrl + C
// unexpected error

// log order
// "I run first" - immediate code
// "hello world" logs at the specified interval
