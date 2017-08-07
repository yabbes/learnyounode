
var http = require('http');


var sources = [process.argv[2], process.argv[3], process.argv[4]];
var counter = 0;
var results = ['','',''];

function retrieveData(source, order) {
    http.get(source, (res) => {
        res.setEncoding('utf8')
        res.on('data', (data) => {
            //allData = allData + data;
            results[order] = results[order] + data;
        })
        res.on('end', () => {
            /*console.log(allData.length);
            console.log(allData);*/
            counter++;
            if (counter == 3) {
                // output data in order
                results.forEach((res) => {
                    console.log(res);
                })
            }

        } );

    }).on('error', (err) => {
        console.log(err);
    });
}

for (var i = 0; i < sources.length; i++) {
    retrieveData(sources[i], i);
    //console.log("retr");
}