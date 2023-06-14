// Globals - no window

// nodejs doesn't have the window object. But, it does have some global variables.

// __dirname  - gives path to current directory
// __filename - gives file name
// require    - function to use/import modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is executed

console.log(__dirname);

setInterval(() => {
  console.log("hello world");
}, 1000);
