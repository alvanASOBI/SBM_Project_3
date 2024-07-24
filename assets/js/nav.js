document.addEventListener('DOMContentLoaded', function () {
    // Now attach the event listeners
    const navHome = document.getElementById('nav-home');
    const navPeople = document.getElementById('nav-people');
    const navChildCare = document.getElementById('nav-child-care');
    const navProfile = document.getElementById('nav-profile');
    const closeBtn = document.getElementById('close-btn');
    const addAccountBtn = document.getElementById('add-account-btn');
    const bottomDrawer = document.getElementById('bottom-drawer');
    const overlay = document.getElementById('overlay');

    if (navHome) {
        navHome.addEventListener('click', function () {
            window.location.href = 'home.html';
        });
    }

    if (navPeople) {
        navPeople.addEventListener('click', function () {
            window.location.href = 'nannybooking.html';
        });
    }

    if (navChildCare) {
        navChildCare.addEventListener('click', function () {
            window.location.href = 'calendar.html';
        });
    }

    // Ensure Firebase is initialized and auth is set up
    const auth = firebase.auth();
    const db = firebase.firestore();

    // Function to fetch and display baby profiles in the bottom drawer
    async function fetchAndDisplayBabyProfiles() {
        try {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    // Fetch baby profiles from Firestore based on userId
                    const q = query(collection(db, 'babyProfile'), where('userId', '==', user.uid));
                    const querySnapshot = await getDocs(q);

                    // Get the drawer content element
                    const drawerContent = document.querySelector('.drawer-content');
                    drawerContent.innerHTML = ''; // Clear existing content

                    // Iterate through the documents and create profile elements
                    querySnapshot.forEach((doc) => {
                        const babyProfile = doc.data();

                        // Create a profile element for each baby profile
                        const profileElement = document.createElement('div');
                        profileElement.classList.add('profiles');
                        profileElement.innerHTML = `
                            <div class="baby-container">
                                <div class="baby-info">
                                    <i class="material-icons baby-icon">child_care</i>
                                    <div class="baby-details">
                                        <span class="baby-name">${babyProfile.name}</span>
                                    </div>
                                </div>
                            </div>
                        `;

                        // Append the profile element to the drawer content
                        drawerContent.appendChild(profileElement);
                    });
                } else {
                    console.log('No user is signed in');
                }
            });
        } catch (error) {
            console.error('Error fetching baby profiles: ', error);
        }
    }

    // Event listener setup for the profile button
    if (navProfile) {
        let longPressTimer;
        const longPressThreshold = 500;
        let isLongPress = false;

        function startLongPressTimer() {
            isLongPress = false;
            longPressTimer = setTimeout(function () {
                isLongPress = true;
                fetchAndDisplayBabyProfiles(); // Fetch and display profiles on long press
                if (bottomDrawer && overlay) {
                    bottomDrawer.classList.add('active');
                    overlay.classList.add('active');
                }
            }, longPressThreshold);
        }

        function clearLongPressTimer() {
            clearTimeout(longPressTimer);
        }

        function handleClick(event) {
            if (isLongPress) {
                event.preventDefault();
            } else {
                window.location.href = 'settings.html';
            }
        }

        navProfile.addEventListener('mousedown', startLongPressTimer);
        navProfile.addEventListener('mouseup', clearLongPressTimer);
        navProfile.addEventListener('click', handleClick);

        navProfile.addEventListener('touchstart', startLongPressTimer);
        navProfile.addEventListener('touchend', clearLongPressTimer);
        navProfile.addEventListener('touchend', handleClick);
    }


    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (bottomDrawer && overlay) {
                bottomDrawer.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function () {
            if (bottomDrawer && overlay) {
                bottomDrawer.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }

    if (addAccountBtn) {
        addAccountBtn.addEventListener('click', function () {
            window.location.href = 'addaccount.html';
        });
    }
});

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDhPUkqiqku9P2vzCGvZmWzdo0nDzAKTR0",
    authDomain: "babysync-pwa.firebaseapp.com",
    projectId: "babysync-pwa",
    storageBucket: "babysync-pwa.appspot.com",
    messagingSenderId: "526444280562",
    appId: "1:526444280562:web:2e1de1423b222427b76e6b"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
