class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event listner
myEmitter.on("event", ()=> console.log("Event Fired!"));

//Init Event
myEmitter.emit("event");