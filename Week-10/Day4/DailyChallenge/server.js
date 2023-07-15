const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve the HTML files
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/register', (req, res) => {
  res.sendFile('register.html', { root: __dirname });
});

// Register route
app.post('/register', (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  if (!name || !lastName || !email || !username || !password) {
    return res.send({ success: false, message: 'All fields are required' });
  }

  // Read the existing users data from the JSON file
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.send({ success: false, message: 'Registration failed' });
    }

    const users = JSON.parse(data);

    // Check if the username or password already exist
    if (users.find(user => user.username === username) || users.find(user => user.password === password)) {
      return res.send({ success: false, message: 'Username or password already exists' });
    }

    // Add the new user to the users array
    const newUser = { name, lastName, email, username, password };
    users.push(newUser);

    // Write the updated users data back to the JSON file
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        return res.send({ success: false, message: 'Registration failed' });
      }

      res.send({ success: true, message: 'Registration successful' });
    });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send({ success: false, message: 'Username and password are required' });
  }

  // Read the users data from the JSON file
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.send({ success: false, message: 'Login failed' });
    }

    const users = JSON.parse(data);

    // Find the user with the matching username and password
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      res.send({ success: true, message: 'Login successful' });
    } else {
      res.send({ success: false, message: 'User does not exist' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
