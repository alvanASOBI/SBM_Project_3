document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Email validation regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // If validation passes, call the sign-in function
    signInUser(email, password);
});

async function signInUser(email, password) {
    try {
        const userCredential = await window.signInWithEmailAndPassword(window.auth, email, password);
        const user = userCredential.user;
        console.log("User signed in:", user.uid);
        alert("Sign-in successful! Redirecting...");
        window.location.href = "../screens/home.html";
    } catch (error) {
        console.error("Error during sign-in:", error);
        alert("Error: " + error.message);
    }
}
