const http = require('http');
const getCurrentDateTime = require(`./main.js`)


const importedNumber = require('./main.js');
const b = 5;

const sum = importedNumber + b;
console.log("Sum:", sum); 

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>My Module is ${importedNumber}</p><h1>Hi there at the frontend</h1>`);
});


server.listen(3000, () => {
    console.log("I'm listening");
});


const server2 = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text.html');
    res.end(`<p>Current date and time: ${getCurrentDateTime()}</p>`);
});

server2.listen(8080, () => {
    console.log("Server is running at http://localhost:8080/");
});


