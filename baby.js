/* Baby Steps */

let sumOfArgs = 0;

for (let i = 2; i<process.argv.length; i++) {
    sumOfArgs += Number(process.argv[i]);
}

console.log(sumOfArgs);