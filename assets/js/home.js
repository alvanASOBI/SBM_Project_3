document.addEventListener('DOMContentLoaded', function () {
    const customerServiceBox = document.getElementById('customer-service');
    const calendarBox = document.getElementById('calendar');
    const bookingBox = document.getElementById('booking');
    const settingsBox = document.getElementById('settings');

    customerServiceBox.addEventListener('click', function () {
        window.location.href = '#';
    });

    calendarBox.addEventListener('click', function () {
        window.location.href = '/screens/growthmonitor.html';
    });

    bookingBox.addEventListener('click', function () {
        window.location.href = '#';
    });

    settingsBox.addEventListener('click', function () {
        window.location.href = '/screens/settings.html';
    });
});



