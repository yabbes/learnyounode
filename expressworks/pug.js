// PUG template engine


var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));



app.get('/home', (req, res) => {
    d = new Date().toDateString();
    res.render('index', {date: d});
});
app.listen(process.argv[2]);