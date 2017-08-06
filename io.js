/* Synchronous IO */
var fs = require('fs');
var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);

var string = buf.toString();
var arr = string.split('\n');

console.log(arr.length -1) ;

