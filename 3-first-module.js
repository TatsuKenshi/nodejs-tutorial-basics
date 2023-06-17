// CommonJS - every file in node is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

// we don't need to export executed functions
// we can just require/import them
require("./7-mind-grenade");

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);
