document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const nannyName = urlParams.get('nannyName');
  if (nannyName) {
    document.getElementById('nannyNameTitle').textContent = `Booking Details for ${nannyName}`;
  }
});
