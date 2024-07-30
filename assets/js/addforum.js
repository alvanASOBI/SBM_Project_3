
        document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var postContent = document.getElementById('postContent').value;
    var postTitle = document.getElementById('postTitle').value;

    if (username && postContent && postTitle) {
        // Create an object to hold post data
        var postData = {
            username: username,
            postTitle: postTitle,
            postContent: postContent
        };

        // Convert post data to JSON and store in local storage
        localStorage.setItem('newPost', JSON.stringify(postData));

        // Redirect to the forum page
        window.location.href = 'forum.html';
    } else {
        alert('Please fill in all fields.');
    }
});
