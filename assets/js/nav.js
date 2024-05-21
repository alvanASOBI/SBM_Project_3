document.addEventListener('DOMContentLoaded', function () {
    const navHome = document.getElementById('nav-home');
    const navPeople = document.getElementById('nav-people');
    const navChildCare = document.getElementById('nav-child-care');

    navHome.addEventListener('click', function () {
        window.location.href = 'home.html';
    });

    navPeople.addEventListener('click', function () {
        window.location.href = 'nannybooking.html';
    });

    navChildCare.addEventListener('click', function () {
        window.location.href = 'growthmonitor.html';
    });

    const navProfile = document.getElementById('nav-profile');
    let longPressTimer;
    const longPressThreshold = 500; // 500 milliseconds for a long press

    navProfile.addEventListener('mousedown', function () {
        longPressTimer = setTimeout(function () {
            document.getElementById('bottom-drawer').classList.add('active');
            document.getElementById('overlay').classList.add('active');
        }, longPressThreshold);
    });

    navProfile.addEventListener('mouseup', function () {
        clearTimeout(longPressTimer);
    });

    navProfile.addEventListener('click', function () {
        clearTimeout(longPressTimer); // Clear the timer just in case
        window.location.href = 'settings.html';
    });

    document.getElementById('close-btn').addEventListener('click', function () {
        document.getElementById('bottom-drawer').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });

    document.getElementById('overlay').addEventListener('click', function () {
        document.getElementById('bottom-drawer').classList.remove('active');
        document.getElementById('overlay').classList.remove('active');
    });

    document.getElementById('add-account-btn').addEventListener('click', function () {
        window.location.href = 'addaccount.html';
    });
});
