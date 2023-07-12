// Exercise 2 : HTTP & JSON
// Instructions
// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const user = {
        firstname: 'John',
        lastname: 'Doe'
    };

    const jsonData = JSON.stringify(user);
    res.end(jsonData);
});

server.listen(8080, 'localhost', () => {
    console.log('Server running at http://localhost:8080/');
});

// OUTPUT
// {"firstname":"John","lastname":"Doe"}

