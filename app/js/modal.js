const btnHire = document.querySelector('.btn--hire');
const btnApply = document.querySelector('.btn--apply');
let modal = document.querySelector('.modal--closed');
let modalOverlay = document.querySelector('.modal-overlay');
const body = document.querySelector('body');
const header = document.querySelector('header');

function modalOpen(){
   modal.classList.toggle('modal--closed')
   modal.classList.toggle('modal--active')
   modalOverlay.classList.toggle('modal-overlay--closed')
   modalOverlay.classList.toggle('modal-overlay--active')
   body.classList.toggle('body--modal')  
   header.classList.toggle('header--closed') 
};

function modalClose(){
   modal.classList.toggle('modal--active')
   modal.classList.toggle('modal--closed')
   modalOverlay.classList.toggle('modal-overlay--active')
   modalOverlay.classList.toggle('modal-overlay--closed')
   body.classList.toggle('body--modal')
   header.classList.toggle('header--closed')
};

btnApply.addEventListener('click', modalOpen);
btnHire.addEventListener('click', modalOpen);

modalOverlay.addEventListener('click', modalClose);


console.log(btnApply);




