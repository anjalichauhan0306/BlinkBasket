function loadLogin() {
    document.getElementById('loginOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';  // ✅ Prevent scroll
  }

  function closeLogin() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.body.style.overflow = '';        // ✅ Enable scroll again
  }

 function showGreeting() {
  const name = localStorage.getItem('userName');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const greetingElement = document.getElementById('userGreeting');
  const loginBtn = document.getElementById('loginBtn');

  if (isLoggedIn === 'true' && name && greetingElement) {
    greetingElement.textContent = `Hi, ${name}`;
    document.getElementById('logoutBtn').style.display = 'inline';
    loginBtn.style.display = 'none';
  } else {
    greetingElement.textContent = '';
    document.getElementById('logoutBtn').style.display = 'none';
    loginBtn.style.display = 'inline';
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
  <label>Full Name</label>
  <input class="login-in" id="loginName" type="text" placeholder="Enter your name" required>

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
function logout() {
  localStorage.clear();
  showGreeting();
  alert("Logged out!");
}

function handleLogin(event) {
  event.preventDefault();

  const name = document.getElementById('loginName').value.trim();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (name === '' || email === '' || password === '') {
    alert("Please fill in all fields.");
    return;
  }

  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userName', name); // ✅ store name

  alert("Login successful!");
  closeLogin();
  showGreeting();
}




