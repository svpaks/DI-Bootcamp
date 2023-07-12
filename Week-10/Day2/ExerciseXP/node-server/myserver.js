// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/


const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end(`
        <h1>Hello, world!</h1>
        <p>This is line 1.</p>
        <p>This is line 2.!</p>
    `);
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://Localhost:3000/');
});



