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

// Console Output from js file 
console.log("Hello!");
console.log("hello", 1, (4+5));

// Template Literals
let pencilPrice = 10;
let eraserPrice = 5;
console.log(`Total price: ${pencilPrice + eraserPrice} rupees`); //back tick not single or double quotes

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
alert("Something is wrong!");
console.error("Error"); //gives error
console.warn("Warning"); //gives warning

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
function hello() { //function definition
    console.log("hello");
}

hello(); //function call

function greet(name) {
    console.log("hello" + name);
    let greet = "hello" + name;
    return greet;
    //statements after return won't be executed
    console.log("not printed"); //won't be printed
}

greet = greet("prapti");

console.log(greet);

//scope
    //global scope - anywhere and everywhere
    //funtion scope - variable defined inside a function are not accessible outside the function
    //block scope - variable defined inside a block (inside curly braces) are only accessible inside it
    //lexical scope - nested function
    function outerFunc() {
        let x = 1;
        let y = 2;
        function innerFunc() {
            let z = x + y; //lexical scope
            return z;
        }
        //return z will give error
        console.log(innerFunc());
    }

    //another way to define function
    const sum = function(a,b) {
        return a + b;
    }

    sum(2,3);


    //higher order functions
        //takes or returns functions as input or output
        function multipleGreet(func, n) {
            for (let i = 1; i <= n; i++) {
                func();
            }
        }
        
        const greet = function() {
            console.log("hello");
        };
        
        multipleGreet(greet, 2);        


        function oddEvenTest(request) {
            if (request === "odd") {
                return function(n) {
                    console.log(!(n % 2 === 0)); // true if odd
                };
            } else if (request === "even") {
                return function(n) {
                    console.log(n % 2 === 0); // true if even
                };
            } else {
                console.log("wrong request");
            }
        }
        
// Methods
// Actions that can be performed on an object.
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

calculator.add(1,2);

//method shorthand
const calculator1 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
};

//'this' keyword
const studentInfo = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this); //student object
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
};
//this.eng, this.math, and this.phy access the respective subject marks from within the object

function Avg() {
    console.log(this); //prints window object
}
Avg();

//default parameter
function func(a,b=2) {
    return a+b;
}

func(1,2);
func(1);

//try & catch
try {
console.log(aloo);
} catch {
    console.log("variable doesn't exist");
};

//arrow func
const sub = (a,b) => {
    console.log(a-b);
}

const mul = (a,b) => (a*b);

//setTimeout
setTimeout(() => {
    const div = (a, b) => a / b;
    console.log(div(10, 2));
}, 4000); //4000ms = 4s

//setInterval
setInterval(() => {
    const div = (a, b) => a / b;
    console.log(div(10, 2));
}, 2000);

//higher order array methods

let abc = [1,2,3,4,5];
abc.forEach(function (el) {
    console.log(el);
});

let double = abc.map(function(el) {
    return el*2;
});

let even = abc.filter( (num) => (num % 2 == 0));

abc.every((el) => (el>0));

abc.reduce ((res,el) => (res+el));