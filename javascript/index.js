function loadLogin() {
    document.getElementById('loginOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';  // ✅ Prevent scroll
  }

  function closeLogin() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.body.style.overflow = '';        // ✅ Enable scroll again
  }

  function showGreeting() {
  const email = localStorage.getItem('userEmail');
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // ✅ Fix here
  const greetingElement = document.getElementById('userGreeting');

  if (isLoggedIn === 'true' && email && greetingElement) {
    greetingElement.textContent = `Hi, ${email}`;
    document.getElementById('logoutBtn').style.display = 'inline';
  } else {
    greetingElement.textContent = '';
    document.getElementById('logoutBtn').style.display = 'none';
  }
}

function logout() {
  localStorage.removeItem('userEmail');
  localStorage.setItem('isLoggedIn', 'false');
  showGreeting();
  alert("Logged out!");
  location.reload(); // reload page after logout
}

const loginContainerElement = document.querySelector('.login-model1');

loginContainerElement.innerHTML = `
  <div class="login-overlay" id="loginOverlay">
    <div class="login-modal">
      <span class="close-btn" onclick="closeLogin()">×</span>
      <h2>Welcome Back 👋</h2>
      <p>Login to continue shopping</p>
      <form class="Login-form" onsubmit="handleLogin(event)">
        <label>Email or Phone</label>
        <input class="login-in" id="loginEmail" type="text" placeholder="Enter email or phone" required>
        
        <label>Password</label>
        <input class="login-in" id="loginPassword" type="password" placeholder="Enter password" required>

        <button class="submit" type="submit">Login</button>
        <p class="bottom-text">Don’t have an account? <a href="#">Sign up</a></p>
      </form>
    </div>
  </div>
`;

function handleLogin(event) {
  event.preventDefault(); // prevent reload

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (email === '' || password === '') {
    alert("Please fill in both fields.");
    return;
  }

  // ✅ Save to localStorage
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userEmail', email);

  alert("Login successful!");
  closeLogin(); // Close modal
  showGreeting(); // Show name in header
}



