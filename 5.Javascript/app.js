// JavaScript Basics

// Variable Declaration
let a = 1;
let b;
const pi = 3.14; // Constant (cannot be reassigned)
var c = 3; // Old syntax (avoid using)

// Identifier Rules: Can contain letters, numbers, _, and $

// NaN (Not a Number) - a special number type (e.g., 0/0)

console.log(typeof 'a'); // "string"

// String Operations
let username = 'prapti';
console.log(username.length); // 6
console.log(username[username.length - 2]); // 't'

let fullname = 'prapti' + ' ' + 'gupta'; // Concatenation

// Console Output
console.log("Hello!");
console.log("hello world!");

// Template Literals
let pencilPrice = 10;
let eraserPrice = 5;
console.log(`Total price: ${pencilPrice + eraserPrice} rupees`);

// Comparison Operators
console.log(5 == '5'); // true (compares value only)
console.log(5 === '5'); // false (compares value & type)

// Conditional Statements
let color = 'red';
if (color === 'red') {
    console.log("Stop!");
} else if (color === 'yellow') {
    console.log("Slow!");
} else if (color === 'green') {
    console.log("Go!");
} else {
    console.log("Light is broken");
}

// Truthy & Falsy Values
// Falsy: false, 0, -0, "", null, undefined, NaN, 0n (BigInt)
// Everything else is truthy

// Alerts & Prompts
alert("Error");
console.error("Error");
console.warn("Warning");

let name = prompt("Enter name:");
console.log(name);

// String Methods
let str = "   prapti    ";
console.log(str.trim()); // "prapti"

let str1 = "PRApti";
console.log(str1.toUpperCase()); // "PRAPTI"
console.log(str1.toLowerCase()); // "prapti"
console.log(str1.indexOf('A')); // 2
console.log(str1.toUpperCase().trim()); // Method Chaining
console.log(str1.slice(2, 4)); // "Ap"
console.log(str1.slice(-2)); // "ti"
console.log(str1.replace("PRA", "pra")); // Replace
console.log(str1.repeat(3)); // "PRAptiPRAptiPRApti"

// Arrays
let students = ["prapti", "aditya", "anshika"];
console.log(students.length); // 3

students.push("manik"); // Add to end
students.pop(); // Remove last element
students.unshift("anshika"); // Add to start
students.shift(); // Remove from start

console.log(students.indexOf("prapti")); // 0
console.log(students.includes("parashar")); // false

let students2 = ["yash", "aman"];
console.log(students.concat(students2)); // Merge arrays
console.log(students.slice(0, 1)); // Extract elements
students.splice(0, 1, "arkin", "gaurav"); // Modify array (delete 1 item at index 0, then add 'arkin' and 'gaurav')
students.sort(); // Sort array

console.log([1] == [1]); // false (arrays are reference types)
let stuCopy = students;
console.log(stuCopy == students); // true (same reference)

const count = [1, 2, 3, 4]; // Allowed: operations on elements, but not reassignment
count.push(5); // Allowed
// count = [5, 6]; // Not allowed (TypeError)

// Nested Arrays
let coordinates = [[0, 0], [0, 1], [1, 0], [1, 1]];

// Loops
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

//for-of loop
let fruits = ["mango","apple","banana","litchi","orange"];

for(let i of fruits) {
    console.log(i);
}

//object literals
    //collection of properties of an object in (key,value) pairs

const student = {
    name: "prapti",
    age: 18,
    cgpa: 8.14,
    city: "delhi"
};

//access values
student["name"]; //or
student.name;

//add/update value
student.city = "mumbai";

student.gender = "f";

delete student.gender;

//nested objects
const student1 = {
    prapti : {
    age: 18,
    cgpa: 8.14,
    city: "delhi"
    },
    aditya : {
        age: 19,
        cgpa: 8.23,
        city: "delhi"
    }
};

student1.prapti.cgpa //dot opearator chaining

//array of objects
const classInfo = [
    {
        name: "prapti",
        cgpa: "8.14"
    },
    {
        name: "aditya",
        cgpa: "8.23"
    }
];

classInfo[1].name;

//math object
//properties
Math.PI;
Math.E;

//methods
Math.abs(-12.5); //12.5
Math.pow(4,2); //16
Math.floor(2.3); //2
Math.ceil(2.3); //3
Math.random(); //random float between 0 and 1

//random integers
let num = Math.random();
num *= 10;
num = Math.floor(num);
num +=1; //to exclude 0 and include 10
//or 
Math.floor( Math.random() * 10  ) + 1;


//functions
