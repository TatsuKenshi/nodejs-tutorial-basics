// event loop

// The event loop is what allows node.js to perform non-blocking I/O (input/output) operations - despite the fact that JavaScript is single threaded - by offloading operations to the system kernel whenever possible.

// node.js (JS in general) first runs immediate code, and only then it runs asynchronous code (regardless of how small and even if the timeout is 0).

// event loop takes in a request, registers a call back, and only after the request is complete, it executes the callback function (callback function gets executed only after all immediate code is executed).

//
// // // example 2 - setTimeout
//

// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

// log order
// "first"
// setTimeout gets offloaded (moved to the back of the execution order line) until it's callback function gets resolved.
// "third", because it is immediate (synchronously written) code
// setTimeout resolves and logs "second"
// log within setTimeout gets logged the last despite the timeout being 0 miliseconds. This has nothing to do with the amount of immediate code that's written below it.
