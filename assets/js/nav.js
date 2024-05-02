function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('div[id^=""]');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Show selected page
    document.getElementById(pageId).style.display = 'block';
}