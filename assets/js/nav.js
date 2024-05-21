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
    let isLongPress = false;

    function startLongPressTimer() {
        isLongPress = false;
        longPressTimer = setTimeout(function () {
            isLongPress = true;
            document.getElementById('bottom-drawer').classList.add('active');
            document.getElementById('overlay').classList.add('active');
        }, longPressThreshold);
    }

    function clearLongPressTimer() {
        clearTimeout(longPressTimer);
    }

    function handleClick(event) {
        if (isLongPress) {
            event.preventDefault(); // Prevent the default action if it was a long press
        } else {
            window.location.href = 'settings.html';
        }
    }

    // Add mouse event listeners
    navProfile.addEventListener('mousedown', startLongPressTimer);
    navProfile.addEventListener('mouseup', clearLongPressTimer);
    navProfile.addEventListener('click', handleClick);

    // Add touch event listeners for mobile devices
    navProfile.addEventListener('touchstart', startLongPressTimer);
    navProfile.addEventListener('touchend', clearLongPressTimer);
    navProfile.addEventListener('touchend', handleClick);

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
