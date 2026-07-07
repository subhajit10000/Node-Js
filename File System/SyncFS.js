// import the file system module...............
const fs = require("fs");


// write a file................
fs.writeFileSync("sample.txt", "Hello Node.js!");
console.log("File written successfully.");


// read a file............
const data = fs.readFileSync("sample.txt", "utf8");
console.log(data);


