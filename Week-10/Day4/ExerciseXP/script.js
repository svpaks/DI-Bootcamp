const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);

    if (Object.values(data).some(value => value === "")) {
        alert("Please fill in all fields");
        return;
    }

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Registration successful');
        } else {
            alert(result.message);
        }
    })
    // Handle the registration result here

    .catch(error => {
        console.error(error);
        alert('Registration failed');
        // Handle registration error here
    });
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);
  
    if (Object.values(data).some(value => value === "")) {
      alert("Please fill in all fields");
      return;
    }
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Login successful');
        } else {
            alert(result.message);
        }
    // Handle the login result here
    })
    .catch(error => {
      console.error(error);
      alert('Login failed');
    // Handle login error here
    });
});