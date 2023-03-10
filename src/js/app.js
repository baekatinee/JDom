import *as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();
$('.header_inner-menu-burger-menu').on('click', function () {
  $('.header_inner-menu-list').slideToggle('active');
});
$('.question_inner-question').on('click', function () {
  $(this).next('.question_inner-question-box').slideToggle('active');
  $(this).children('.question_inner-question-info-arrow').toggleClass('active');
});

$('.question_inner-question').on('click', function () {
  $(this)
    .closest('.question_inner-question')
    .find('.question_inner-question-box')
    .slideToggle('active');
});
$('.question_inner-question').on('click', function () {
  $(this)
    .closest('.question_inner-question')
    .find('.question_inner-question-info-arrow')
    .toggleClass('active');
});

const slider = new A11YSlider(document.querySelector('.history_inner'), {
  slidesToShow: 1,
  arrows: true, // arrows enabled 767px and down
  dots: false,
  responsive: {

    320: {
      disable: true // slider disabled 960px to 1279px
    },
    651: {
      disable: false,
    }
  }
});