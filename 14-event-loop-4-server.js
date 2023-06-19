// event loop

// The event loop is what allows node.js to perform non-blocking I/O (input/output) operations - despite the fact that JavaScript is single threaded - by offloading operations to the system kernel whenever possible.

// node.js (JS in general) first runs immediate code, and only then it runs asynchronous code (regardless of how small and even if the timeout is 0).

// event loop takes in a request, registers a call back, and only after the request is complete, it executes the callback function (callback function gets executed only after all immediate code is executed).

//
// // // example 4 - server
//

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});

server.listen(5000, () => {
  console.log("server listening on port : 5000...");
});

// log order
// "server listening on port : 5000..."
// "request event" every time server picks up a request on port 5000
// "hello world" gets written on http://localhost:5000 in browser
