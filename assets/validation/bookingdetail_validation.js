function submitBooking() {
    const urlParams = new URLSearchParams(window.location.search);
    const nannyName = urlParams.get('nannyName');
    const date = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const location = document.getElementById('location').value;

    if (date && startTime && endTime && location) {
      const booking = { nannyName, date, startTime, endTime, location };
      let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      bookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      alert("Booking submitted successfully!");
      window.location.href = 'allbookings.html';
    } else {
      alert('Please fill out all fields.');
    }
  }