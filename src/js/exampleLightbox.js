const modalBtn = document.querySelector('.header__button');

modalBtn.addEventListener('click', openModal);

function openModal(event) {
  console.log(event.target);
}
