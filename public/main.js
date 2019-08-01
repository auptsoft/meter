const http = require('http');

http.createServer((req, resp)=>{
    resp.writeHead(200, {"Content-Type":"text/plain"});
    resp.end("00#>00001>02400>01200>15000>18000>500>08000>1>2>1>1>2>#");
    console.log(req.url);
}).listen(2000);
console.log("server started on port 2000");
