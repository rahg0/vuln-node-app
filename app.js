var colors = require('colors');
var toUpper = require('to-upper');
var zip = require('bestzip');

console.log(colors.rainbow("Color changed to rainbow, via color npm package..."));
console.log(toUpper("lowercase to uppercase via to uppercase npm package..."));


zip('/tmp/sample-node-app.zip', ['./app.js', './package.json', './package-lock.json'], function(err) {
    if  (err) {
        console.error(err.stack);
        process.exit(1);
    } else {
        console.log('Compressed node project is here: sample-node-app.zip');
    }
});
