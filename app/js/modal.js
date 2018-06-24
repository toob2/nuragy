const buttonA = document.querySelector('.btn--hire');
let modalCont = document.querySelector('.modal')

function modal(){
   if (modalCont.className === "modal")
      {modalCont.className = "modal__unfold";}
   else {
      modalCont.className = "modal";}
   }

buttonA.addEventListener('click', modal);

