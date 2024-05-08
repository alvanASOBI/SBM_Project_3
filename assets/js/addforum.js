document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var postContent = document.getElementById('postContent').value;
    var postTitle = document.getElementById('postTitle').value;

    if (username && postContent) {
        var post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = '<h1>' + postTitle + '</h1>' + '<h3>' + username + '</h3><p>' + postContent + '</p>';
        document.getElementById('posts').appendChild(post);

        document.getElementById('username').value = '';
        document.getElementById('postContent').value = '';
        document.getElementById('postTitle').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
