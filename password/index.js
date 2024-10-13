const API_URL = 'http://localhost:3000/data'; // Your actual API URL

// Function to handle login
async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Store JWT token in localStorage or cookies (localStorage used here for simplicity)
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username);

      // Show logout section and hide login form
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('logoutSection').style.display = 'block';
      document.getElementById('welcomeUser').innerText = username;
      document.getElementById('logoutBtn').style.display = 'block';

      alert('Login successful!');
    } else {
      alert('Login failed: ' + data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while logging in.');
  }
}

// Function to handle logout
function logout() {
  // Optionally, you can also send a request to the API to invalidate the token (not always necessary)

  // Clear token and username from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('username');

  // Hide logout section and show login form
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('logoutSection').style.display = 'none';
  document.getElementById('logoutBtn').style.display = 'none';

  alert('Logged out successfully!');
}

// Check if user is already logged in (e.g., token exists in localStorage)
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  if (token) {
    // If a token exists, show logout section and hide login form
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logoutSection').style.display = 'block';
    document.getElementById('welcomeUser').innerText = username;
    document.getElementById('logoutBtn').style.display = 'block';
  }
});
