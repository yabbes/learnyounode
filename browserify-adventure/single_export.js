var myFunction = require('./uniquely.js');

var user_input = prompt();

var arr = user_input.split(',');

console.log(myFunction(arr));