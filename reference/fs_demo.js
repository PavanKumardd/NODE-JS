const fs = require("fs");
const path = require("path"); 

//Create folder
// fs.mkdir(path.join(__dirname, "/test"),{},err => {
//     if(err) throw err;
//     console.log("Folder Created...");
// });

//Create and WRITE TO FILE
// fs.writeFile(path.join(__dirname,"/test","hello.txt"), "Hello World!", err => {
//     if(err) throw err;
//     console.log("File Written to...");
// });

//Append file to another
// fs.writeFile(path.join(__dirname,"/test","hello.txt"), "Hello World!", err => {
//     if(err) throw err;
//     console.log("File Written to...");

//     //File append
//     fs.appendFile(path.join(__dirname,"/test","hello.txt"), " I Love node.js", err => {
//         if(err) throw err;
//         console.log("File Written to...");
//     });
// });

//Read the file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"),"utf-8",(err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

//Rename a file
fs.rename(path.join(__dirname, "/test", "hello.txt"),path.join(__dirname, "/test", "helloworld.txt"),err => {
    if(err) throw err;
    console.log("File renamed");
});


