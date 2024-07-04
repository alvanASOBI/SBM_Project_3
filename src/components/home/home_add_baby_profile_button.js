export function homeAddBabyProfileCardButton() {
  const addBabyProfileCardButtonHTML = `
      <section class="add-baby">
        <a href="../screens/addaccount.html">
          <i class="medium material-icons">add_circle_outline</i>
        </a>
      </section>
    `;

  document.querySelector('.app main').insertAdjacentHTML('beforeend', addBabyProfileCardButtonHTML);
}
