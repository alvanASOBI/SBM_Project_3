// bottom-nav.js

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
    <div class="overlay" id="overlay"></div>
    <div class="bottom-drawer" id="bottom-drawer">
      <div class="drawer-content">
        <span class="close-btn" id="close-btn">
          <i class="material-icons">arrow_drop_down</i>
        </span>
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
          <span>Daniel Lee Baby 2</span>
        </div>
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
          <span>Ah Paw Baby 3</span>
        </div>
        <div class="add-account-btn" id="add-account-btn">
          <i class="material-icons">add_circle_outline</i>
          <span>Add Baby Account</span>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', bottomNavHTML);

  // Add event listeners for drawer functionality
  const overlay = document.getElementById('overlay');
  const bottomDrawer = document.getElementById('bottom-drawer');
  const closeBtn = document.getElementById('close-btn');

  closeBtn.addEventListener('click', () => {
    bottomDrawer.classList.remove('open');
    overlay.classList.remove('show');
  });

  document.querySelector('.nav-item#nav-profile').addEventListener('click', () => {
    bottomDrawer.classList.add('open');
    overlay.classList.add('show');
  });
}
