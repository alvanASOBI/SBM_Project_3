export function bottomNavigationBar() {
  const bottomNavHTML = `
    <div class="bottom-nav">
      <div class="nav-item" id="nav-home">
        <i class="material-icons">home</i>
      </div>
      <div class="nav-item" id="nav-people">
        <i class="material-icons">people_outline</i>
      </div>
      <div class="nav-item" id="nav-child-care">
        <i class="material-icons">child_care</i>
      </div>
      <div class="nav-item" id="nav-profile">
        <img
          src=""
          style="
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background-color: black;
          "
        />
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', bottomNavHTML);

  // Check if the current page is not home.html
  if (window.location.pathname !== '/screens/home.html') {
    const drawerHTML = `
      <div class="overlay" id="overlay"></div>
      <div class="bottom-drawer" id="bottom-drawer">
        <div class="drawer-content">
          <div class="profiles">
            <img
              src=""
              style="
                height: 30px;
                width: 30px;
                border-radius: 50%;
                background-color: black;
              "
            />
            <span>John Doe Baby 1</span>
          </div>
          <div class="add-account-btn" id="add-account-btn">
            <i class="material-icons">add_circle_outline</i>
            <span>Add Baby Account</span>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', drawerHTML);

    // Add event listeners for drawer functionality
    const overlay = document.getElementById('overlay');
    const bottomDrawer = document.getElementById('bottom-drawer');

    const closeDrawer = (event) => {
      event.preventDefault();
      bottomDrawer.classList.remove('active');
      overlay.classList.remove('active');
    };

    document.querySelector('.nav-item#nav-profile').addEventListener('click', () => {
      bottomDrawer.classList.add('active');
      overlay.classList.add('active');

    });

    overlay.addEventListener('click', closeDrawer);
    overlay.addEventListener('touchend', closeDrawer);
  }
}
