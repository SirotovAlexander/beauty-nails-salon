import * as basicLightbox from 'basiclightbox';
const modalBtn = document.querySelector('.header__button');
// console.dir(basicLightbox);

const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

modalBtn.addEventListener('click', openModal);

function openModal(event) {
  console.log(event.target);
  instance.show();
}
