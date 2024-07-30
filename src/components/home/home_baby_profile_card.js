export function homeBabyProfileCard(profile) {
  const { icon, name, age, height } = profile;

  const babyProfileCardHTML = `
      <section class="baby-container">
        <div class="baby-info">
          <div class="baby-icon">
            <i class="medium material-icons">${icon}</i>
          </div>
          <div class="baby-details">
            <h5>${name}</h5>
            <p>Age: ${age}</p>
            <p>Height: ${height}</p>
          </div>
        </div>
      </section>
    `;

  document.querySelector('.app main').insertAdjacentHTML('beforeend', babyProfileCardHTML);
}
