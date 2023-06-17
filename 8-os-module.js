// os module gives info about the user and the system (operating system)

const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds.
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
