var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (filename == "./") {filename = './index';}
    filename = filename + ".html";
    console.log(filename);
    fs.readFile(filename,'utf-8',function(error, data){
        if (error) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("<h1> Error 404 Occured</h1>");
        }
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(data);
        return res.end;
    });
    
}).listen(8080);

console.log("listening on port 8080");