
// Import the file system module
const fs = require("fs");

// Write a file
fs.writeFile("sample.txt", "Hello Node.js!", (err) => {
    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("File written successfully.");

    // Read the file
    fs.readFile("sample.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log(data);

      
