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

//HEADER-SLIDER

const headerSlider = document.querySelector('.header__slider');
const headerSliderContent = document.querySelectorAll('.header__content');
const headerSliderLine = document.querySelector('.header__slider-wrapper');
const headerDots = document.querySelectorAll('.header__dot');
const headerBtnNext = document.querySelector('.header__arrow-next');
const headerBtnPrev = document.querySelector('.header__arrow-prev');

let sliderCount = 0;
let sliderWidth = headerSlider.offsetWidth;

function thisSlide(index) {
  headerDots.forEach(item => item.classList.remove('header__dot--active'));
  headerDots[index].classList.add('header__dot--active');
}

function rollSlider() {
  headerSliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function changeLogo() {
  if (sliderCount % 2 === 0) {
    document.querySelector('.header__logo').classList.add('header__logo--dark');
  } else if (sliderCount % 2 !== 0) {
    document.querySelector('.header__logo').classList.remove('header__logo--dark');
  }
}

function nextSlide() {
  sliderCount++;
  if (sliderCount >= headerSliderContent.length) {
    sliderCount = 0;
  }
  rollSlider();
  thisSlide(sliderCount);
  changeLogo();
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = headerSliderContent.length - 1;
  rollSlider();
  thisSlide(sliderCount);
  changeLogo();
}

headerBtnNext.addEventListener('click', nextSlide);
headerBtnPrev.addEventListener('click', prevSlide);

headerDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
    changeLogo();
  });
});

// setInterval(() => {
//   nextSlide();
// }, 5000);

//FOOTER-ACCORDEON

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
