//basic notes

// //declaration of variable
// let a = 1;
// let b;

// const pi = 3.14; //cannot be edited/reassigned

// var c = 3; //old syntax

// //identifier rules
//     //letters,numbers,_,$
//

// //NaN - not a number (like 0/0) [value of 'number' data type]

// typeof 'a'
// //returns 'string'

// username = 'prapti'
// username.lengh //returns 6
// 'prapti'.length //also returns 6
// username[username.length-2] //returns 't'

// fullname = 'prapti' + ' ' + 'gupta' //concatenation

// //to print message on console window
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
    console.log("Light is broken");
}

//nested if else - standard syntax

//switch - standard syntax

//truthy and falsy
// false, 0,-0, "", null, undefined, NaN, On (BigInt value) - false values
//everything else - true values

//alerts & prompts

alert("Error");
comsole.error("Error");
console.warn("Warning");


let Name = prompt("Enter name:");
console.log(Name);

//string methods
str = "   prapti    ";
console.log(str.trim());

str1 = "PRApti";

console.log(str.toUpperCase()); //PRAPTI
console.log(str.toLowerCase()); //prapti

str1.indexOf('A')

//method chaining
console.log(str1.toUpperCase().trim());

str1.slice(2,4) //Apt