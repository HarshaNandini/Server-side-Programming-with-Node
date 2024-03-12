//import module
const fs = require('fs');

// create a stream with file to write
const file = fs.createWriteStream('./file.txt');

// write millions of lines but in chunks
for (let i=0; i<1000000; i++){
    file.write("Node is a JS runtime env built on Google Chrome's V8 engine \n")
}