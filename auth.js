// Helpers
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}
function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
function saveSession(user) {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
}
function showAlert(msg) {
  alert(msg);
}

// Password show/hide
document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const input = document.getElementById(targetId);
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
  });
});

// Registration Handler
const regForm = document.getElementById("registrationForm");
if (regForm) {
  regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirm").value;

    if (!username || !email || !phone || !password || !confirm) {
      showAlert("Please fill all fields!");
      return;
    }
    if (password.length < 6) {
      showAlert("Password should be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      showAlert("Passwords do not match!");
      return;
    }

    const users = getUsers();

    const exists = users.some(
      (u) => u.username.toLowerCase() === username.toLowerCase() || u.email.toLowerCase() === email.toLowerCase()
    );
    if (exists) {
      showAlert("Username or Email already registered!");
      return;
    }

    users.push({ username, email, phone, password });
    setUsers(users);

    showAlert("Registration Successful! Now login.");
    window.location.href = "login.html";
  });
}

// Login Handler
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!username || !password) {
      showAlert("Please enter username and password!");
      return;
    }

    const users = getUsers();
    const user = users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (user) {
      saveSession(user);
      showAlert("Login Successful!");
      window.location.href = "index.html";
    } else {
      showAlert("Invalid Username or Password!");
    }
  });
}
