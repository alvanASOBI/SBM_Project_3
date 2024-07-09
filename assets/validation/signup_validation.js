import { addUserToDatabase } from '../js/db.js';

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

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

    if (!username || !email || !password ) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate password length
    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }

    // If validation passes, call the registration function
    registerUser(username, email, password);
});

async function registerUser(username, email, password) {
    try {
        const userCredential = await window.createUserWithEmailAndPassword(window.auth, email, password);
        const user = userCredential.user;
        console.log("User created:", user.uid);

        // Store user email and password in Firestore
        await addUserToDatabase(user.uid, username, user.email, password);

        console.log("User data saved to Firestore");
        alert("Registration successful! Redirecting to sign-in page...");
        window.location.href = "../screens/signin.html";
    } catch (error) {
        console.error("Error during registration:", error);
        alert("Error: " + error.message);
    }
}
