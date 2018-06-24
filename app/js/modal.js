const btnHire = document.querySelector('.btn--hire');
let modal = document.querySelector('.modal--closed');
let modalOverlay = document.querySelector('.modal-overlay--closed');
const body = document.querySelector('body');

function modalUnfold(){
   modal.classList.toggle('modal--closed')
   modal.classList.toggle('modal--active')
   modalOverlay.classList.toggle('modal-overlay--closed')
   modalOverlay.classList.toggle('modal-overlay--active')
   body.classList.toggle('body--modal')   
};

function modalClose(){
   modal.classList.toggle('modal--active')
   modal.classList.toggle('modal--closed')
   modalOverlay.classList.toggle('modal-overlay--active')
   modalOverlay.classList.toggle('modal-overlay--closed')
   body.classList.toggle('body--modal')
};

btnHire.addEventListener('click', modalUnfold);

modalOverlay.addEventListener('click', modalClose);




