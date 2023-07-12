// Exercise 3 : Express
// Instructions
// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


