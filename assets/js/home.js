document.getElementById('profile-item').addEventListener('click', function () {
    document.getElementById('bottom-drawer').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('bottom-drawer').classList.remove('active');
});

document.getElementById('profile-item').addEventListener('click', function () {
    document.getElementById('bottom-drawer').classList.add('active');
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('bottom-drawer').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function () {
    document.getElementById('bottom-drawer').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});