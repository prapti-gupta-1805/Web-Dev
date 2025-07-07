let btn = document.querySelector(".btn");
// btn.onclick = function() {
//     alert("button was clicked");
// };

// //OR
// let btn1 = document.querySelector(".btn1");
// function sayHello() {
//     alert("hello!");
// };
// btn1.onclick = sayHello;

// //OR
// let btns = document.querySelectorAll("button");
// for (let btn of btns) {
//     btn.onclick = function() {
//         alert("get wrecked");
//     };
// }

//event listeners
btn.addEventListener("click", function(event) { //callback function takes a default argument event which tells us about event
    console.log(event);
});

//mouse events
btn.addEventListener("click", function() {
    alert("hello!");
});
btn.addEventListener("click", function() {
    alert("fuck you :)");
});

//similarly 'dblclick' for double click

//this in event listeners
btn.addEventListener("click", function () {
    console.log(this); //'this' is the object for which event listener is being used
});

let p = document.querySelector('p');

p.addEventListener("click", function () {
    console.log(this);
});

//keyboard events
//keydown, keyup, keypress, etc.

let text = document.querySelector(".textbox");

text.addEventListener("keydown", function(event) {
    console.log("key was pressed")
    console.log(event.key) //returns what key was pressed
    console.log(event.code) //returns code of key that was pressed
});