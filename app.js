// Event Emitter
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("saymyname", () => {
  console.log("Hello this is fired event");
});

event.emit("saymyname");
