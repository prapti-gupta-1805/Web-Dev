let btn = document.querySelector(".btn");
btn.onclick = function() {
    alert("button was clicked");
};

//OR
let btn1 = document.querySelector(".btn1");
function sayHello() {
    alert("hello!");
};
btn1.onclick = sayHello;

//OR
let btns = document.querySelectorAll("button"); // selects all <button> elements
for (let btn of btns) {
    btn.onclick = function() {
        alert("get wrecked");
    };
}