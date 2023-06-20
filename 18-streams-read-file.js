const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

// default size of the stream buffer is 64kb
// last buffer is the remainder of the file
//highWaterMark - object used to control the stream buffer size
// {highWaterMark: number}
// we can also put encoding property into the options object in createReadStream's initialization. That is, if we want to see the actual file text instead of the <Buffer 68 65...>

stream.on("error", (err) => console.log(err));
