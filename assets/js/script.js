

// document.getElementById("signInForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if (!email || !password) {
//         alert("Please fill in both fields.");
//         return;
//     }
    
//     // If validation passes, you can proceed with backend authentication
//     alert("Attempting to sign in...");
//     // Typically, you would send a request to your server here
// });


// document.getElementById("registerForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
//     // Perform validation
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;
    
//     if (!email || !password || !confirmPassword) {
//         alert("Please fill in all fields.");
//         return;
//     }
    
//     if (password !== confirmPassword) {
//         alert("Passwords do not match.");
//         return;
//     }
    
//     // If all validations pass, you can proceed with form submission
//     // For example, you can send the form data to your backend or display a success message
//     alert("Form submitted successfully!");
// });


// script.js

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Password requirements
    var passwordMinLength = 5;
    var passwordMaxLength = 10;

    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If validation passes, you can proceed with form submission
    alert("Form submitted successfully!");
});

document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Password requirements
    var passwordMinLength = 5;
    var passwordMaxLength = 10;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        alert("Password must be between " + passwordMinLength + " and " + passwordMaxLength + " characters.");
        return;
    }

    // If validation passes, you can proceed with backend authentication
    alert("Attempting to sign in...");
    // Typically, you would send a request to your server here
});
