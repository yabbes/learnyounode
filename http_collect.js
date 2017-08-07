/* collect data */

var http = require('http');
var allData = '';

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8')
    res.on('data', (data) => {
        allData = allData + data;
    })
    res.on('end', () => {
        console.log(allData.length);
        console.log(allData);
    } );

}).on('error', (err) => {
    console.log(err);
});

/* solution with buffered list below 
 
var http = require('http')
var bl = require('bl')
    
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
    if (err) {
        return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
    }))
})

*/