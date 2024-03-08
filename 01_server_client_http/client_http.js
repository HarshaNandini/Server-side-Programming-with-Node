const http = require('http');
const PORT = 5400;
const url_root = 'http://localhost:'+PORT;

http.get(url_root,(res)=>{
    res.pipe(process.stdout)
});


http.get(url_root+'/add',(res)=>{
    res.pipe(process.stdout)
});


http.get(url_root+'/mul',(res)=>{
    res.pipe(process.stdout)
});