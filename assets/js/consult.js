function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    if (message !== "") {
        var chatMessages = document.getElementById("chat-messages");
        var userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = '<p>' + message + '</p>';
        chatMessages.appendChild(userMessage);
        messageInput.value = "";
        // You can add functionality here to send the message to the professional
    }
}