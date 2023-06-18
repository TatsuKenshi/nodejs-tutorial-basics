const http = require("http");

// server creation function
// createServer method has two params: request and result (req, res)
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
    // instead of return, we can also use if/else if/else structure
  }

  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }

  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for.</p>
  <a href="/">back home</a>
  `);
});

// port
server.listen(5000);
