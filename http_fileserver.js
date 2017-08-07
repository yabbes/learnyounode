/* http file server that serves a file for each request */

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer((req, res) => {
    //server logic
    var readStream = fs.createReadStream(filename);
    readStream.pipe(res);
});
server.listen(port);