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

//conditional statements
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

console.log(str.trim()); //prapti

str1 = "PRApti";

console.log(str.toUpperCase()); //PRAPTI
console.log(str.toLowerCase()); //prapti

str1.indexOf('A') //2

//method chaining
console.log(str1.toUpperCase().trim());

str1.slice(2,4); //Apt
str1.slice(-2); //str1.slice(length-2) = 6-2 = 4 //ti

str1.slice("PRA","pra"); //replaces first arg with second arg

str1.repeat(3); //PRAptiPRApti


//arrays
let students = ["prapti", "aditya", "anshika"];
students.length; //3

students.push("manik"); //will insert manik at end of array
students.pop(); //will delete last element and return it
students.unshift("anshika"); //add element to start of array
students.shift(); //delete from start and return it

students.indexOf("prapti"); //0

students.includes("parashar"); //false

let students2 = ["yash", "aman"];

students.concat(students2); //concatenates second array into first array

students.slice(0,1); //prapti

students.splice(0,1,"arkin","gaurav"); //delete 1 item from 0 index, then add arkin and gaurav to the start of the array //arr.splice(start,deletecount,item 0,item N)

students.sort();

[1] == [1]; //will return false as array returns by reference

stuCopy = students;
stucopy == students; //will return true

const count = [1,2,3,4];
// array operations are still allowed as long as address isn't changed

//nested array
coordinates = [[0,0],[0,1],[1,0],[1,1]];

//for loop
for (let i = 1; i<=5 ; i++) {
    console.log(i);
}

//while loop
let i=0;
while (i<=5) {
    console.log(i);
    i++;
}