
var through = require('through2');
var split = require('split');
var counter = 1;
/*
process.stdin
    .pipe(split())
    .pipe(through( (line, _, next) => {
        if (counter % 2 === 0) {
            this.push(line.toString().toUpperCase());
        } else {
            this.push(line.toString().toLowerCase());
        }
        counter++;
        next();
    })).pipe(process.stdout);
*/
var stream = through( function (buff, _, next){
    if (counter % 2 === 0) {
        this.push(buff.toString().toUpperCase()+'\n');
    } else {
        this.push(buff.toString().toLowerCase()+'\n');
        }
    counter++;
    next();
});

process.stdin
    .pipe(split('\n'))
    .pipe(stream)
    .pipe(process.stdout);

