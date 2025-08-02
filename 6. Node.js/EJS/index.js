//EJS: Embedded JavaScript templating engine
//Used to create templates for HTML pages


//create views folder in the root directory for all templates

const express = require('express');
const path = require('path');
const app = express();

port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//standard line of code
app.set('view engine', 'ejs'); //set the view engine to EJS
app.set("views", path.join(__dirname, '/views')); //set the views directory

app.get('/', (req, res) => {
    res.render('home.ejs'); //render the home.ejs file in the views folder
    });

app.get('/rolldice', (req, res) => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs', {diceVal});
});