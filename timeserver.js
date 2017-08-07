/* write a tcp time server */

var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];
console.log(port);
var server = net.createServer((socket) => {
    let today = new Date();
    console.log("client connected");
    let formatted_d = strftime('%F %H:%M', today);

    socket.write(formatted_d + '\n');
    socket.end();
    

});

server.listen(port);
