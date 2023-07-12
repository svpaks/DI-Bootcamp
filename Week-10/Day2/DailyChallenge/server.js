const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby;
    if (typeof hobby === 'string') {
        res.send(hobby);
    } else {
        res.status(404).send('Invalid hobby');
    }
});

// Route for /pic
app.get('/pic', (req, res) => {
    res.sendFile(__dirname + '/public/picture.html');
});


// Route for from
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
});

// Route for form submission
app.post('/formData', (req, res) => {
    const email = rq.body.email;
    const message = req.body.message;
    const formattedMessage = `${email} sent you a message: "${message}"`;
    res.send(formattedMessage);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});