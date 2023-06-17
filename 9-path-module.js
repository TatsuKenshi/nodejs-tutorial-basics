// PATH module allows us to interact with files on the computer

const path = require("path");

// .sep property is the filesystem separator
console.log(path.sep);

// create a file's full path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// file's basename
const base = path.basename(filePath);
console.log(base); // logs "test.txt"

// path.resolve returns an absolute path value
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
