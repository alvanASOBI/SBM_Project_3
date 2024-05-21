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
});

document.getElementById('nav-profile').addEventListener('click', function () {
    document.getElementById('bottom-drawer').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('bottom-drawer').classList.remove('active');
});

document.getElementById('nav-profile').addEventListener('click', function () {
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

document.getElementById('add-account-btn').addEventListener('click', function () {
    window.location.href = 'addaccount.html'; 
});