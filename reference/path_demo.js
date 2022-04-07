const path = require("path");

//Base file name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extension name
console.log(path.extname(__filename));

//Create Path Object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//Concatenate Paths
console.log(path.join(__dirname, "test", "hello.html"));
