<template>
  <div class="sideBar" :class="{ open: true }">
    <div class="login-container">
      <h2>Login</h2>
      <form action="/login" method="post">
          <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" required>
          </div>
          <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>
          </div>
          <button type="submit" class="btn-login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
/* Sidebar styles */
.sideBar {
    width: 30%;
    background-color: #858585;
    color: #fff;
    position: fixed;
    top: 0;
    left: -250px; /* Change to left positioning */
    height: 100%;
    transition: left 10s ease; /* Adjust transition property */
    transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.sideBar.open {
    left: 0; /* Position the sidebar to the left edge of the screen */
}

.login-container {
            width: 300px;
            margin: 100px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .login-container h2 {
            text-align: center;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        .form-group input:focus {
            outline: none;
            border-color: dodgerblue;
        }
        .btn-login {
            width: 100%;
            padding: 10px;
            background-color: dodgerblue;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        .btn-login:hover {
            background-color: #4CAF50;
        }

</style>
