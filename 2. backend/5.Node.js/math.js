const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const square = (a) => a * a;
const power = (a, b) => Math.pow(a, b);
const sqrt = (a) => Math.sqrt(a);
const pi = Math.PI;
const e = Math.E;

// Exporting Math.js as a module
module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    square,
    power,
    sqrt,
    pi,
    e
};

//alternative way to export
//exports.cube = (a) => a * a * a;