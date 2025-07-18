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

//chaining promises
saveToDb("user123")
    .then(() => {
        console.log("Data saved successfully!");
        return saveToDb("user456");
    })
    .then(() => {
            console.log("Data 2 saved successfully!");
    })
    .catch(() => {
        console.log("Failed to save data.");
    });

//result and error
saveToDb("user123")
    .then((result) => {
        console.log("Data saved successfully!");
        console.log("result of promise:", result);
    })
    .catch((error) => {
        console.log("Failed to save data.");
        console.error("result of promise:", error);
    });

//async/await
//async function is used to make a function return a promise
async function greet() {
    console.log("hello");
};

greet();

//await pauses the execution of the async function until the promise is resolved
function getNum() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(5)}, 1000);
    });
}

async function demo() {
    await getNum(); //waits for getNum to resolve
    await getNum();
    getNum();
}

demo();

//handling rejections with await
async function greet() {
    try {
        await Promise.reject("error");
        console.log("hello");
    } catch (error) {
        console.error("Error:", error);
    }
};
