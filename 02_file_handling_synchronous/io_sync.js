// import modules
const fs = require('fs');
const path = require('path');

// define filepath
const filepath = path.join(process.cwd(),'hello.txt');

// read in sync mode
const contents = fs.readFileSync(filepath, 'utf-8');
console.log('File contents:',contents);

// write in sync mode
fs.writeFileSync(filepath, contents.toUpperCase());
