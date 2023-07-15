const express = require('express');
const app = express();
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'your_username',
        password: 'your_password',
        database: 'tour_database'
        // filename: './database.db'
    }
    // useNullAsDefault: true
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Registration route
app.post('/register', (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;

    if (!firstName || lastName || !email ||!username || !password) {
        return res.json({ success: false, message: 'All fields are required' });
    } 

    const hashedPassword = 'p4ssw0rd';


    knex('register')
    .insert({ firstName, lastName, email, username, createdDate: new Date(), lastLofindata: null })
    .returning('userId')
    .then((userId) => {
        return knex('login').insert({ logIn: userId[0], username, password: hashedPassword });
        // res.status(200).json({ message: 'Registration successful' });
    })
    .then(() => {
        res.json({ success: true });
    })
    .catch((error) => {
        console.error(error);
        res.json({ success: false, message: 'Registration failed' });
    });
});


// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body:

    if (!username || !password) {
        return res.json({ success: false, message: 'Username and password are required' });
    }
    // res.status(200).json({ message: 'Login successful' });

    knex('login')
    .where({ username })
    .select()
    .then((result) => {
        if (result.lenght === 0) {
            res.json({ success: false, message: 'User does not exist' });
        } else {
            const storedPassword = 'p4ssw0rd';
            if (password === storedPassword) {
            // Update the last login date in the register table
            const loginId = result[0].loginId;
            const lastLofinData = new Data();
            return knex('register').where('userId', loginId).update({ lastLofinData });
        } else {
            res.json({ success: false, message: 'Invalid password' });
        }
    }
})
.then(() => {
    res.json({ success: true });
})
.catch((error) => {
    console.error(error);
    res.json({ success: false, messageL 'Login failed' });
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});