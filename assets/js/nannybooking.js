
      function hireNanny() {
        alert("Successfully hired! Your Nanny will contact you within 2 days!");
      }

      const reviews = {
        nanny1: [],
        nanny2: []
      };

      function toggleReviews(nannyId) {
        const reviewList = document.getElementById(`${nannyId}-reviews`);
        reviewList.style.display = reviewList.style.display === 'none' ? 'block' : 'none';
        updateAverageRating(nannyId);
        displayReviews(nannyId);
      }

      function rateNanny(nannyId, rating) {
        const stars = document.getElementById(`${nannyId}-rating`).children;
        for (let i = 0; i < stars.length; i++) {
          stars[i].innerText = i < rating ? 'star' : 'star_border';
        }
        document.getElementById(`${nannyId}-rating`).setAttribute('data-rating', rating);
      }

      function submitReview(nannyId) {
        const rating = parseInt(document.getElementById(`${nannyId}-rating`).getAttribute('data-rating'));
        const comment = document.getElementById(`${nannyId}-comment`).value;

        if (rating && comment) {
          reviews[nannyId].push({ rating, comment });
          document.getElementById(`${nannyId}-comment`).value = '';
          rateNanny(nannyId, 0);
          updateAverageRating(nannyId);
          displayReviews(nannyId);
        } else {
          alert('Please provide a rating and a comment.');
        }
      }

      function updateAverageRating(nannyId) {
        const reviewList = reviews[nannyId];
        if (reviewList.length === 0) {
          document.getElementById(`${nannyId}-average-rating`).innerText = 'No reviews yet';
          return;
        }

        const sum = reviewList.reduce((acc, review) => acc + review.rating, 0);
        const average = (sum / reviewList.length).toFixed(1);
        document.getElementById(`${nannyId}-average-rating`).innerText = `Average Rating: ${average} out of 5`;
      }

      function displayReviews(nannyId) {
        const reviewItems = document.getElementById(`${nannyId}-review-items`);
        reviewItems.innerHTML = '';

        reviews[nannyId].forEach(review => {
          const reviewElement = document.createElement('div');
          reviewElement.className = 'review';
          reviewElement.innerHTML = `<strong>Rating:</strong> ${review.rating} / 5<br/><strong>Comment:</strong> ${review.comment}`;
          reviewItems.appendChild(reviewElement);
        });
      }