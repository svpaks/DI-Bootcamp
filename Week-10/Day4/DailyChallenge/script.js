const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Disable submit button if any input is empty
loginForm.addEventListener('input', () => {
  const inputs = Array.from(loginForm.elements).slice(0, 2);
  const loginBtn = document.getElementById('loginBtn');
  const isAnyInputEmpty = inputs.some(input => input.value === '');
  loginBtn.disabled = isAnyInputEmpty;
});

registerForm.addEventListener('input', () => {
  const inputs = Array.from(registerForm.elements).slice(0, 5);
  const registerBtn = document.getElementById('registerBtn');
  const isAnyInputEmpty = inputs.some(input => input.value === '');
  registerBtn.disabled = isAnyInputEmpty;
});

// Fetch request for registration
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);

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
      alert(result.message);
    } else {
      alert(result.message);
    }
  })
  .catch(error => {
    console.error(error);
    alert('Registration failed');
  });
});

// Fetch request for login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData);

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
      alert(result.message);
    } else {
      alert(result.message);
    }
  })
  .catch(error => {
    console.error(error);
    alert('Login failed');
  });
});
