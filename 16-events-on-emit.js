// stock class for event emitters
const EventEmitter = require("events");

// extend the class if you want to customize your emitter
const customEmitter = new EventEmitter();

// most important properties on the emitter object are:
// on - listens for an event
// emit - emits an event

// on method has the name param and a callback function which contains what we want the event to execute.
// emit has one param - event name

// on (listen) method has to come before the emit (action) method

customEmitter.on("response", () => {
  console.log(`data received`);
});

// multiple instances can listen for the same event and do different things. For example, let's reuse the "response" event

// listener callback function can also receive additional parameters from the emit method.
customEmitter.on("response", (name, id) => {
  console.log(`more data received. User: ${name}. ID: ${id}.`);
});

customEmitter.emit("response", "john", 34);
