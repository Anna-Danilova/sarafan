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

//АККОРДЕОН
const accordeonItems = document.querySelectorAll('.accordeon');

function accordeon(e) {
  e.preventDefault;
  let currentContent = e.target.closest('.accordeon');
  let currentAccordeon = e.target.nextElementSibling;
  currentContent.classList.toggle('accordeon--active');
  if (currentContent.classList.contains('accordeon--active')) {
    currentAccordeon.style.maxHeight = currentAccordeon.scrollHeight + 'px';
  } else {
    currentAccordeon.style.maxHeight = 0;
  }
}

accordeonItems.forEach(content => {
  content.addEventListener('click', accordeon);
});
