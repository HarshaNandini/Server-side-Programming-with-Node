// read data as chunks
const fs = require('fs');

// create a stream with file to read
const rs = fs.createReadStream('./file.txt');

// read in chunks
rs.on('data',(data)=>{console.log('Read chunk: '+data)});

// stop streaming
rs.on('end',()=>{console.log('End of file...')})