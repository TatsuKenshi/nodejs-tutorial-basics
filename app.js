// npm - node package manager
// npm - global command, comes with node
// npm --version

// local dependency - used in a particular project
// npm i (or install) <packageName>
// used more often

// global dependency - used in any project on a given machine
// npm install -g <packageName>
// sudo npm install -g <packageName> (if npm install won't work)

// package.json - manifest file (stores important project/package info)

// manual approach (create package.json in the project root, create properties, etc)
// npm init (step by step guided creation, press enter to skip)
// npm init -y (automatic creation, all default options selected)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello people");
