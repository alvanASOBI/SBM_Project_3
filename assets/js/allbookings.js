
function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingsList = document.getElementById('bookingsList');
    bookingsList.innerHTML = '';
    
    bookings.forEach((booking, index) => {
        const bookingDiv = document.createElement('div');
        bookingDiv.className = 'booking';
        bookingDiv.innerHTML = `
            <div>
                <strong>${booking.nannyName}</strong><br>
                <strong>Booking ${index + 1}</strong><br>
                <strong>Date:</strong> ${booking.date}<br>
                <strong>Start Time:</strong> ${booking.startTime}<br>
                <strong>End Time:</strong> ${booking.endTime}<br>
                <strong>Location:</strong> ${booking.location}
            </div>
            <button onclick="deleteBooking(${index})">X</button>
        `;
        bookingsList.appendChild(bookingDiv);
    });
}

function deleteBooking(index) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    loadBookings();
}

window.onload = loadBookings;
