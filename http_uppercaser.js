/* http server that converts incoming post body chars to uppercase */

var map = require('through2-map');
var http = require('http');
var port = process.argv[2];

var server = http.createServer((req, res) => {
    if(req.method === 'POST') {
        req.pipe(map((chunk) => {
            console.log(chunk.toString());
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        console.log("didn't send POST");
        res.end();
    }
   
});
server.listen(port);