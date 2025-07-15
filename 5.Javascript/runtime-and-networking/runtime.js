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

//promise objects

//code without promises
function saveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveToDb("user123", 
    () => {
        console.log("Data saved successfully!");
    },
    () => {
        console.log("Failed to save data.");
    }
);

//same code with promises
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve();
        } else {
            reject();
        }
    });
}

saveToDb("user123");

//states: pending, fulfilled, rejected
//resolved -> success callback is called
//rejected -> failure callback is called, also gives error

//then and catch methods
saveToDb("user123")
    .then(() => {
        console.log("Data saved successfully!");
    })
    .catch(() => {
        console.log("Failed to save data.");
    });

//then method: runs if promise is resolved
//catch method: runs if promise is rejected