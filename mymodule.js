let fs = require('fs');
let path = require('path');


module.exports = (path_p, ext_p, cb) => {
    let p = path.resolve(path_p);
    let filter_ext = ext_p;
    let arr = [];

    fs.readdir(p, (err, files) => {
        if (err) {
            return cb(err);
        }
        files.forEach((file) => {
            if (file.endsWith('.'+ext_p)) {
                arr.push(file);
            }

        });
        return cb(null, arr); // null error and data in arr
    });
}