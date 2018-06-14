const toggler = document.querySelector('.nav__toggler');
const navList = document.querySelector('.nav__list');
const burger  = document.querySelector('.nav__burger');

function navToggle(){
  navList.classList.toggle('nav__list');
  navList.classList.toggle('nav__list--mobile');
  burger.classList.toggle('nav__burger--active');
};

toggler.addEventListener('click', navToggle);



