
      document.addEventListener("DOMContentLoaded", function () {
        var questionIcons = document.querySelectorAll(".question-icons");

        questionIcons.forEach(function (icon) {
          icon
            .querySelector(".comment-icon")
            .addEventListener("click", function () {
              var commentsSection =
                icon.parentNode.querySelector(".comments-section");
              commentsSection.style.display =
                commentsSection.style.display === "none" ? "block" : "none";
            });
        });

        var commentForms = document.querySelectorAll(".comment-form");
        commentForms.forEach(function (form) {
          form.addEventListener("submit", function (event) {
            event.preventDefault();
            var commentInput = this.querySelector('input[type="text"]');
            var commentText = commentInput.value.trim();
            if (commentText !== "") {
              var commentsContainer =
                this.parentNode.querySelector(".comments");
              var commentDiv = document.createElement("div");
              commentDiv.textContent = commentText;
              commentsContainer.appendChild(commentDiv);
              commentInput.value = "";
            }
          });
        });
      });