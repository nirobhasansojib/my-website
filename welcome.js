// (function () {
//   const user = JSON.parse(localStorage.getItem("loggedInUser"));
//   const msg = document.getElementById("welcomeMsg");
//   const logoutBtn = document.getElementById("logoutBtn");

//   if (!user) {
//     // Not logged in → back to login
//     window.location.href = "login.html";
//     return;
//   }

//   if (msg) msg.textContent = "Welcome, " + user.username + "!";

//   if (logoutBtn) {
//     logoutBtn.addEventListener("click", () => {
//       localStorage.removeItem("loggedInUser");
//       window.location.href = "login.html";
//     });
//   }
// })();
