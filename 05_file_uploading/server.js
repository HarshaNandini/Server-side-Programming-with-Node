// import modules
// for file handling
const fs = require('fs');
// for server 
const http = require('http');
// a html page to display to user to ask them to
const page = fs.readFileSync('./public/form.html');
// for file uploads
const formidable = require('formidable');

// create server with a generic get and post method
// and publish it via Host and Port
http.createServer((req,res)=>{
    if (req.method==='GET'){return get(res)}
    else if (req.method==='POST'){return post(req,res)}
    else {error(res, 405)}
}).listen(4000,'0.0.0.0')

// a exception handling function
function error(res,code){res.end(http.STATUS_CODES[code])};

// a get function to show form to user
function get(res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(page);
}

// a post function to receive uploaded file from user
function post(req,res){
    if (!/multipart\/form-data/.test(req.headers['content-type'])){return error(res,415)};
    // create a formidable instance
    const form = formidable.formidable({
        multiples:true,
        uploadDir:'./uploads'
    })
    // parse the file and send response back to client
    form.parse(req, (err, fields, files)=>{
        if (err) return err;
        res.writeHead(200,http.STATUS_CODES[200],{'Content-Type':'application/json'})
        res.end(JSON.stringify({fields, files}))
    })
}