//enter 'node fileName.js' in terminal to enter node REPL and run the code
//console.log(process); //process object contains information about the current process
console.log(process.argv); //array containing CLI passed
//process.argv[0] and process.argv[1] are file info.process.argv[2] onwards are the arguments passed to the script

const Math = require("./math.js"); //importing the Math module from math.js file

console.log(Math); //prints the entire Math module object

console.log(Math.subtract(2, 3)); //now we can use the functions defined in math.js


// Importing an entire directory
const fruits = require("fruits"); //importing the entire fruits directory - it will look for index.js in the directory and import it
console.log(fruits);

//npm: Node Package Manager
//it is like a library of packages like express, react, charts.js, etc.
//also a command line tool