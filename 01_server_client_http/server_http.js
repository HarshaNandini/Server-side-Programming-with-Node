const http = require('http');
const HOST = '0.0.0.0';
const PORT = 5400;

const server = http.createServer((req, res)=>{
    if (req.url=='/'){
        res.statusCode = 200;
        return res.end('Hello Angel')
    }
    else if (req.url=='/about'){
        res.statusCode = 200;
        res.write('\nHola\n')
        res.write('aweSome\n')
        return res.end('Angel!!!\n')
    }
    else {
        res.end(`{Error: ${http.STATUS_CODES[404]}}`)
    }
})

server.listen(PORT,HOST,()=>console.log("Server is listening to", server.address().port))