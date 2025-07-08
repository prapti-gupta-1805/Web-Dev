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

//form events
let form = document.querySelector('form');
let inp = document.querySelector('form input');
//or let inp = this.elements[0];

form.addEventListener("submit", function(event) {
    alert("Form Submitted")
    event.preventDefault(); //prevents default redirection to action

    console.log(inp.value);
});

//more events
// 'change': fires when value is changed and user is done (e.g., presses Enter or clicks away)
// 'input': fires instantly as the value changes (while typing)

//event bubbling
// Event bubbling is when an event on a nested element first runs its handler, then "bubbles up" and triggers handlers on its parent elements.

let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", function () {
    console.log("Div clicked");
    // event.stopPropagation(); //to stop bubbling here
});

child.addEventListener("click", function () {
    console.log("Button clicked");
});