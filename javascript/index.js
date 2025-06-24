function loadLogin() {
    document.getElementById('loginOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';  // ✅ Prevent scroll
  }

  function closeLogin() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.body.style.overflow = '';        // ✅ Enable scroll again
  }

const loginContainerElement = document.querySelector('.login-model1');

loginContainerElement.innerHTML = `<div class="login-overlay" id="loginOverlay">
  <div class="login-modal">
    <span class="close-btn" onclick="closeLogin()">×</span>
    <h2>Welcome Back 👋</h2>
    <p>Login to continue shopping</p>
    <form class="Login-form">
      <label>Email or Phone</label>
      <input class="login-in" type="text" placeholder="Enter email or phone" required>

      <label>Password</label>
      <input class="login-in" type="password" placeholder="Enter password" required>

      <button class="submit" type="submit">Login</button>

      <p class="bottom-text">Don’t have an account? <a href="#">Sign up</a></p>
    </form>
  </div>
</div>`


