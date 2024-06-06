document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Email validation regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password requirements
    var passwordMinLength = 5;
    var passwordMaxLength = 10;

    // Validate email
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Validate password
    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }
    alert("Attempting to sign in...");
});