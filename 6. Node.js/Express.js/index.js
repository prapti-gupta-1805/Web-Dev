const express = require('express');
const app = express();

//listening to incoming requests
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//run localhost:3000 in browser to see the server response

// //recieving a request
// app.use((req, res) => {
//     console.log('Request received');
//     res.send('<h1>Response sent</h1>'); //sending a response
// });

//routing
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// app.get("*", (req, res) => {
//     res.send('Page Not Found');
// });

app.post('/', (req, res) => {
    res.send('Post Request to Home Page');
});

//use 'nodemon index.js' to automatically restart the server when changes are saved to the file

//path parameters
// app.get('/:username', (req, res) => {
//     const username = req.params.username;
//     res.send(`Welcome, @${username}!`);
// });

//query strings
app.get('/search', (req, res) => {
    const {q} = req.query; //
    res.send(`Search Results for: ${q}`);
});