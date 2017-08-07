/* pipe file contents to stdout */

var fs = require('fs');

var file = process.argv[2];

var readStream = fs.createReadStream(file);

// and pipe

readStream.pipe(process.stdout);