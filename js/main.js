/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
// SWIPER
let swiperTest2 = new Swiper("#swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.reviews__btn-right2',
    prevEl: '.reviews__btn-left2'
  }
});

//BURGER
const IconNav = document.querySelector('.burger');
const navbar = document.querySelector('.nav');
const socials = document.querySelector('.socials');
IconNav.addEventListener("click", function (e) {
  IconNav.classList.toggle('burger__active');
  navbar.classList.toggle('nav__active');
  socials.classList.toggle('socials__active');
  document.body.classList.toggle('_lock');
});
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', () => {
    IconNav.classList.remove('burger__active');
    navbar.classList.remove('nav__active');
    socials.classList.remove('socials__active');
    document.body.classList.remove('_lock');
  });
});

// From display
const reserve = document.querySelector('.hero__btn');
const btnClose = document.querySelector('.button--close');
const Form = document.querySelector('.formes');
reserve.addEventListener('click', () => {
  Form.classList.toggle('modale__active');
  document.body.classList.toggle('_lock');
});
btnClose.addEventListener('click', () => {
  Form.classList.remove('modale__active');
  document.body.classList.remove('_lock');
});

// form validation and send
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
const validation = new JustValidate('.form');
validation.addField('.input-name', [{
  rule: 'minLength',
  value: 3,
  errorMessage: 'Не менее 3 символов'
}, {
  rule: 'maxLength',
  value: 30
}, {
  rule: 'required',
  value: true,
  errorMessage: 'Введите имя!'
}]).addField('.input-mail', [{
  rule: 'required',
  value: true,
  errorMessage: 'Email обязателен'
}, {
  rule: 'email',
  value: true,
  errorMessage: 'Введите корректный Email'
}]).addField('.input-tel', [{
  rule: 'required',
  value: true,
  errorMessage: 'Телефон обязателен'
}, {
  rule: 'function',
  validator: function () {
    const phone = telSelector.inputmask.unmaskedvalue();
    return phone.length === 10;
  },
  errorMessage: 'Введите корректный телефон'
}]).onSuccess(event => {
  let formData = new FormData(event.target);
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("good");
        console.log('Отправлено');
      }
    }
    Form.classList.remove('modale__active');
    document.body.classList.remove('_lock');
  };
  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);
  event.target.reset();
});
/******/ })()
;
//# sourceMappingURL=main.js.map