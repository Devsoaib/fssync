const fs = require('fs');
const http = require('http');

let server = http.createServer((req, res)=> {
   if (req.url == '/') {
    let data = fs.readFileSync('index.html');
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(data);
    res.end();
   }

});

server.listen(7070);
console.log('success');