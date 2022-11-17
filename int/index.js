const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password1 = loginForm.password1.value;
    const password2 = loginForm.password2.value;
    const password3 = loginForm.password3.value;

    

    if (password1 === "DIPVXO99" && password2 === "7e48Pa2c" && password3 === "eF87Zy2p" ) {
        alert("You have successfully logged in.");
        location.replace("bravo.html");
        
    } else {
        loginErrorMsg.style.opacity = 1;
        location.reload
    }
})

console.log(' Premier Code: 7e4')


