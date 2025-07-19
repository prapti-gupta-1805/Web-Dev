const express = require('express');
const app = express();

//listening to incoming requests
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//run localhost:3000 in browser to see the server response