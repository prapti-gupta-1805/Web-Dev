//callback function
const h1 = document.querySelector("h1");
//nextColorChange: callback function to run after this color change
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

//callback nesting
// callback hell is when callback functions are nested inside each other and the code becomes difficult to read and maintain
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("blue", 1000);
        });
    });
});

//promises
