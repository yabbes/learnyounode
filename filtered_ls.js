/* Filtered LS */ 
let fs = require('fs');
let path = require('path');

let p = path.resolve(process.argv[2]);
let filter = process.argv[3];

fs.readdir(p, (err, files) => {
    if (err){ console.log(err)};
    files.forEach((file) => {
        if(file.endsWith('.'+filter)){
            console.log(file);
        }
    });
});


