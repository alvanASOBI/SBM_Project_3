document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

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

    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate password
    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }

    // Validate password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful! Redirecting to sign-in page...");
    window.location.href = 'Signin.html';
});