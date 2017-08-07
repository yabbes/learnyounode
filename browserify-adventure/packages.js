var uniq = require('uniq');

var user_input = prompt();

var arr = user_input.split(',');

console.log(uniq(arr));