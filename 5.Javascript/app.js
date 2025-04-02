//console notes

// //declaration of variable
// let a = 1;
// let b;

// const pi = 3.14; //cannot be edited/reassigned

// var c = 3; //old syntax

// //identifier rules
//     //letters,numbers,_,$
//     //

// //NaN - not a number (like 0/0) [value of 'number' data type]

// typeof 'a'
// //returns 'string'

// username = 'prapti'
// username.lengh //returns 6
// 'prapti'.length //also returns 6
// username[username.length-2] //returns 't'

// fullname = 'prapti' + ' ' + 'gupta'

// //undefined - A variable that has been declared but not assigned a value.
// //null -  A value that explicitly represents "nothing". Not assigned by JavaScript automatically, must be set intentionally by the programmer.

// //console.log() - to print message on console window
// console.log("Hello!")

console.log("hello world!")

let pencilPrice = 10;
let eraserPrice = 5;

// console.log("Price is", pencilPrice + eraserPrice, "rupees")
//template literals
console.log(`The total price is ${pencilPrice + eraserPrice} rupees`);

//5 == '5' will return true (compares value not type)
//5 === '5' will return false (compares value AND type)

//loops
let colour = 'red';
if (colour ) {
    console.log("Stop!");
}
else if (colour = 'yellow' ) {
    console.log("Slow!");
}
else if (colour = 'green') {
    console.log("Go!");
}
else {
    console.log("Invalid colour");
}