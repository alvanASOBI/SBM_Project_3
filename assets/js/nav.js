document.addEventListener('DOMContentLoaded', function () {
    // Now attach the event listeners
    const navHome = document.getElementById('nav-home');
    const navPeople = document.getElementById('nav-people');
    const navChildCare = document.getElementById('nav-child-care');
    const navProfile = document.getElementById('nav-profile');
    const closeBtn = document.getElementById('close-btn');
    const addAccountBtn = document.getElementById('add-account-btn');

    if (navHome) {
        navHome.addEventListener('click', function () {
            window.location.href = 'home.html';
        });
    }

    if (navPeople) {
        navPeople.addEventListener('click', function () {
            window.location.href = 'nannybooking.html';
        });
    }

    if (navChildCare) {
        navChildCare.addEventListener('click', function () {
            window.location.href = 'calendar.html';
        });
    }

    if (navProfile) {
        let longPressTimer;
        const longPressThreshold = 500;
        let isLongPress = false;

        function startLongPressTimer() {
            isLongPress = false;
            longPressTimer = setTimeout(function () {
                isLongPress = true;
                if (bottomDrawer && overlay) {
                    bottomDrawer.classList.add('active');
                    overlay.classList.add('active');
                }
            }, longPressThreshold);
        }

        function clearLongPressTimer() {
            clearTimeout(longPressTimer);
        }

        function handleClick(event) {
            if (isLongPress) {
                event.preventDefault();
            } else {
                window.location.href = 'settings.html';
            }
        }

        navProfile.addEventListener('mousedown', startLongPressTimer);
        navProfile.addEventListener('mouseup', clearLongPressTimer);
        navProfile.addEventListener('click', handleClick);

        navProfile.addEventListener('touchstart', startLongPressTimer);
        navProfile.addEventListener('touchend', clearLongPressTimer);
        navProfile.addEventListener('touchend', handleClick);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (bottomDrawer && overlay) {
                bottomDrawer.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function () {
            if (bottomDrawer && overlay) {
                bottomDrawer.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }

    if (addAccountBtn) {
        addAccountBtn.addEventListener('click', function () {
            window.location.href = 'addaccount.html';
        });
    }
});
