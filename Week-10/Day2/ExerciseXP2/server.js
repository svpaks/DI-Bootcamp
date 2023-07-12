const express = require('express');
const app = express();
const port = 3000;

app.use("/", express.static('public'));

app.get('/exercise1', (req, res) => {
    res.sendFile(__dirname + "/public/index1.html")
});

app.get('/users', (req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.send(JSON.stringify(user));
});


// Exercise 2
// Instructions
// In the server.js file, create your server using express.
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id.
// The handler function of the route should respond with the value of the route parameter. Check out req.params.
// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// The response should be the JSON Object. Console.log this object and display it on the DOM.


app.get('/test/:id', (req, res) => {
    const id = req.params.id;
    const response = {
        id: id
    };
    res.send(JSON.stringify(response));
});


// Exercise3
app.get('/exercise3', (req, res) => {
    res.sendFile(__dirname + "/public/index2.html")
});





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

