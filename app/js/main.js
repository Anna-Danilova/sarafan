'use strict';
//БУРГЕР-МЕНЮ
const hamburger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
hamburger.addEventListener('click', function () {
  menu.classList.toggle('header__menu--open');
  hamburger.classList.toggle('header__burger--cross');
});

window.addEventListener('click', e => {
  const target = e.target;
  if (!target.closest('.header__menu') && !target.closest('.header__burger')) {
    menu.classList.remove('header__menu--open');
    hamburger.classList.remove('header__burger--cross');
  }
});
