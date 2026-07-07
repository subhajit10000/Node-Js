// import the file system module...............
const fs = require("fs");


// write a file................
fs.writeFileSync("sample.txt", "Hello Node.js!");
console.log("File written successfully.");


// read a file............
const data = fs.readFileSync("sample.txt", "utf8");
console.log(data);



// update a file............
fs.appendFileSync("sample.txt", "\nWelcome to Express.");
console.log("File updated successfully.");


// delete a file..........
fs.unlinkSync("sample.txt");
console.log("File deleted successfully.");



