var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("connection", () => {
  console.log("Connection Succesfull");

  eventEmitter.emit("data");
});

eventEmitter.on("data", () => {
  console.log("Data Received Succesfully");
});

eventEmitter.emit("connection");

console.log("End");
