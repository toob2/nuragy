const toggler = document.querySelector('.nav__toggler');
const navWrapper = document.querySelector('.nav__wrapper');
const burger  = document.querySelector('.nav__burger');
const navLinks = document.querySelectorAll('.nav__link');
const navArr = Array.apply(null, navLinks);

function navToggle(){
  navWrapper.classList.toggle('nav__wrapper');
  navWrapper.classList.toggle('nav__wrapper--mobile');
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









