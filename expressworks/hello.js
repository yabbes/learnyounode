// Hello World !

var express = require('express');
var app = express();

app.get('/home', (req, res) => {
    res.end('Hello World!');
});
app.listen(process.argv[2]);