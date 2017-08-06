/* reading a file asynchonously */

var fs = require('fs');
var filePath = process.argv[2];

var file = fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    
    let str = data.toString();
    let arr = str.split('\n');
    console.log(arr.length -1 );
});