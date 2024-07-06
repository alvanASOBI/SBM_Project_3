document.getElementById('date').addEventListener('input', function() {
  const date = new Date(this.value);
  if (date < new Date()) {
    alert('The date cannot be in the past.');
    this.value = '';
  }
});

document.getElementById('endTime').addEventListener('input', function() {
  const startTime = document.getElementById('startTime').value;
  if (this.value <= startTime) {
    alert('End time must be after start time.');
    this.value = '';
  }
});
