// async file reading and writing using "await"
const fs = require('fs').promises;

// define file path
const path = require('node:path');
const filepath = path.join(process.cwd(),'hola.txt')
let contents;

// a async-await function to read file
async function run(){
    try{
        contents = await fs.readFile(filepath,'utf-8');
        console.log('contents are: ',contents);
    } catch(error) {
        console.log(error);
    }
};

// a async-await function to read file
async function updateFile(contents){
    const updatedContents = 'updated in async-await\n'+contents;
    try{
        await fs.writeFile(filepath, updatedContents, 'utf-8');
    } catch(err){
        console.log(err);
    }
};

// read file first
run();
console.log(contents);
// wait for 100 milliseconds and write contents back
setTimeout(()=>updateFile(contents), 100);