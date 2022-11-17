"use strict";

var loginForm = document.getElementById("login-form");
var loginButton = document.getElementById("login-form-submit");
var loginErrorMsg = document.getElementById("login-error-msg");
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  var password1 = loginForm.password1.value;
  var password2 = loginForm.password2.value;
  var password3 = loginForm.password3.value;

  if (password1 === "DIPVXO99" && password2 === "7e48Pa2c" && password3 === "eF87Zy2p") {
    alert("You have successfully logged in.");
    location.replace("signin.html");
  } else {
    loginErrorMsg.style.opacity = 1;
    location.reload;
  }
});
console.log('7e4');