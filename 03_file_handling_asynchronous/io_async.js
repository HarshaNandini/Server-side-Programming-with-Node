// import modules
const path = require('path')
const fs = require('fs')

// define file path
console.log(process.cwd())
const filepath = path.join(process.cwd(),'hola.txt')


// read file in async mode
fs.readFile(filepath, 'utf-8', (err,data)=>{
    if (err){console.log(err);}
    else {
        console.log(data);
        const write_data = `async writing line\n${data}\na last async line`;
        // write file in async mode
        fs.writeFile(filepath, write_data, 'utf-8', (err)=>{
            if (err){throw err}
            else {console.log('written successfully in async mode')}
        })

    }
})
// a log to feel the async processes
console.log('when will i be printed? the last?')


