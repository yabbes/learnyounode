/* perform a simple get request with http core module */

var http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        console.log(data);
    });
}).on('error', (e) => {
    console.log("error: ", e.message);
})