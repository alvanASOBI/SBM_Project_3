document.addEventListener('DOMContentLoaded', function () {
    const customerServiceBox = document.getElementById('customer-service');
    const calendarBox = document.getElementById('calendar');
    const bookingBox = document.getElementById('booking');
    const settingsBox = document.getElementById('settings');

    customerServiceBox.addEventListener('click', function () {
        window.location.href = 'forum.html';
    });

    calendarBox.addEventListener('click', function () {
        window.location.href = 'growthmonitor.html';
    });

    bookingBox.addEventListener('click', function () {
        window.location.href = 'nannybooking.html';
    });

    settingsBox.addEventListener('click', function () {
        window.location.href = 'settings.html';
    });
});



