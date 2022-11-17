let mainNav = document.getElementById(`nav-ul`);
let navBarToggle = document.getElementById(`js-navbar-toggle`);
let modal = document.getElementById(`simpleModal`);
let modalBtn = document.getElementById(`modalBtn`);
let closeBtn = document.getElementsByClassName(`closeBtn`)[0];

navBarToggle.addEventListener(`click`, function () {
  mainNav.classList.toggle(`click`);
});

modalBtn.addEventListener(`click`, openModal);
closeBtn.addEventListener(`click`, closeModal);
window.addEventListener(`click`, clickOutside);

function openModal() {
  modal.style.display = `block`;
}

function closeModal() {
  modal.style.display = `none`;
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = `none`;
  }
}
