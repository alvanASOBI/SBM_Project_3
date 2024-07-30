import { db, collection, getDocs } from "../src/components/firebase_configuration.js";

// Function to fetch and display baby profiles
async function displayBabyProfiles() {
  const babyProfilesContainer = document.getElementById('babyProfilesContainer');

  try {
    // Fetch baby profiles from Firestore
    const querySnapshot = await getDocs(collection(db, 'babyProfile'));

    // Clear previous content
    babyProfilesContainer.innerHTML = '';

    // Iterate through the documents
    querySnapshot.forEach((doc) => {
      const babyProfile = doc.data();

      // Create HTML elements to display each baby profile
      const profileDiv = document.createElement('div');
      profileDiv.classList.add('baby-profile');

      // Example structure, adjust as per your actual data fields
      profileDiv.innerHTML = `
        <div class="baby-container">
          <div class="baby-info">
            <i class="material-icons baby-icon">child_care</i>
            <div class="baby-details">
              <span class="baby-name">Name: ${babyProfile.Name}</span>
              <span class="baby-age">Age: ${babyProfile.Age} months</span>
              <span class="baby-height">Height: ${babyProfile.height} cm</span>
            </div>
          </div>
        </div>
      `;

      // Append the profile div to the container
      babyProfilesContainer.appendChild(profileDiv);
    });
  } catch (error) {
    console.error('Error fetching baby profiles: ', error);
  }
}

// Call the function to display baby profiles when the page loads
document.addEventListener('DOMContentLoaded', () => {
  displayBabyProfiles();
});



