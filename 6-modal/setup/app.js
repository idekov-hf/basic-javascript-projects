// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modal = document.querySelector('.modal-overlay');

function addListener(selector) {
  document.querySelector(selector).addEventListener('click', toggleModal);
}

function toggleModal() {
  modal.classList.toggle('open-modal');
}

addListener('.modal-btn');
addListener('.close-btn');
