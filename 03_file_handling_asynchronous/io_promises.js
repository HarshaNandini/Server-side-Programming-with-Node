// use promises filehandling
// define filepath
const path = require('node:path');
const filepath = path.join(process.cwd(),'hola.txt')

// read file in promises
const fs = require('fs').promises;
const kk = fs.readFile(filepath, 'utf-8').then(
    (data)=>{console.log(data);updateFile(data);return 'good'}, 
    (err)=>console.log('whoops',err)
    )
console.log(kk);

// a function to write file in promises
function updateFile(contents){
    const updatedContents = 'updated in promises\n'+contents;

    fs.writeFile(filepath, updatedContents, 'utf-8').then(
        ()=>console.log('updated successfully...'),
        (err)=>console.log('whoops',err)
    )
};
// call write function after 100 milliseconds
setTimeout(()=>console.log(kk),100);
