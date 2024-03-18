'use strict';
//HAMBURGER-MENU
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

//FOOTER-ACCORDEON
// const footerAccordeonContent = document.querySelectorAll('.footer__content');
// const footerAccordeonBtn = Array.from(document.querySelectorAll('.footer__title'));

const footerAccordeonContent = Array.from(document.querySelectorAll('.footer__content-accordeon'));

function accordeon(e) {
  e.preventDefault;
  let currentContent = e.target.closest('.footer__content-accordeon');
  let currentAccordeon = e.target.nextElementSibling;
  currentContent.classList.toggle('footer__content-accordeon--active');
  if (currentContent.classList.contains('footer__content-accordeon--active')) {
    currentAccordeon.style.maxHeight = currentAccordeon.scrollHeight + 'px';
  } else {
    currentAccordeon.style.maxHeight = 0;
  }
}

footerAccordeonContent.forEach(content => {
  content.addEventListener('click', accordeon);
});
