// Toggle function
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleImg = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleImg.src = "../images/eye_closed.svg";
    } else {
        passwordInput.type = "password";
        toggleImg.src = "../images/eye_open.svg";
    }
}

// Toggle function
function c_togglePassword() {
    var passwordInput = document.getElementById("c-password");
    var toggleImg = document.querySelector(".c-toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleImg.src = "../images/eye_closed.svg";
    } else {
        passwordInput.type = "password";
        toggleImg.src = "../images/eye_open.svg";
    }
}