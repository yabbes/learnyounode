/* filtered_ls modular version */
var mymodule = require('./mymodule.js') 

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) { console.log(err);}
    data.forEach((file) => {
        console.log(file);
    });
});
