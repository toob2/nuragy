const toggler = document.querySelector('.nav__toggler');
const navList = document.querySelector('.nav__list');
const burger  = document.querySelector('.nav__burger');
const navLinks = document.querySelectorAll('.nav__link');
const navArr = Array.apply(null, navLinks);

function navToggle(){
  navList.classList.toggle('nav__list');
  navList.classList.toggle('nav__list--mobile');
  burger.classList.toggle('nav__burger--active');
};

toggler.addEventListener('click', navToggle);

function navf(){
  toggler.click();
};

navArr.forEach(function(a){
  a.addEventListener('click', function(){
    navf();
  }, 
    false);
});









