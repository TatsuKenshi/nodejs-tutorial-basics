// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    // const first = await readFilePromise("./content/first.txt", "utf-8");
    // const second = await readFilePromise("./content/second.txt", "utf-8");
    // await writeFilePromise(
    //   "./content/result-mind-grenade.txt",
    //   `This is awesome : ${first} ${second}`
    // );

    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-mind-grenade-two.txt",
      `This is awesome : ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// commented code uses the util library
// active code uses require("fs").promises
