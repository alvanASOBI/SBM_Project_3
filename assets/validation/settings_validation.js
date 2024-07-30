document.getElementById("settingsForm").addEventListener("submit", function (event) {
    event.preventDefault();
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

    // Validate password
    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }
    
    alert("Settings updated successfully!");
    document.getElementById("settingsForm").submit();
});
