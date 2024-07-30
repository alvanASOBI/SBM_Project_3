document
  .getElementById("usernameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("usernameInput").value;
    if (username) {
      alert(`Username ${username} created successfully!`);
    } else {
      alert("Please enter a username.");
    }
  });