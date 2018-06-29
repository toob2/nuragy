const btnHire = document.querySelector('.btn--hire');
const btnApply = document.querySelector('.btn--apply');
let modal = document.querySelector('.modal');
let modalOverlay = document.querySelector('.modal-overlay');
let form1 = document.querySelector('#form1');
let form2 = document.querySelector('#form2');
const body = document.querySelector('body');
const header = document.querySelector('header');

function modalOpen(){
   modal.classList.toggle('modal')
   modal.classList.toggle('modal--active')
   modalOverlay.classList.toggle('modal-overlay')
   modalOverlay.classList.toggle('modal-overlay--active')
   body.classList.toggle('body--modal')  
   header.classList.toggle('header--closed') 
};

function modalClose(){
   modal.classList.toggle('modal--active')
   modal.classList.toggle('modal')
   modalOverlay.classList.toggle('modal-overlay--active')
   modalOverlay.classList.toggle('modal-overlay')
   body.classList.toggle('body--modal')
   header.classList.toggle('header--closed')
};

btnApply.addEventListener('click', function(){
   modalOpen();
   form1.classList.toggle('form')
   form1.classList.toggle('form--active')
});

btnHire.addEventListener('click', function(){
   modalOpen()
   form2.classList.toggle('form')
   form2.classList.toggle('form--active')
});

modalOverlay.addEventListener('click', function(){
   modalClose();
   if (form1.className === 'form--active'){
      form1.className = 'form'
   };

   if (form2.className === 'form--active'){
      form2.className = 'form'
   };
})







