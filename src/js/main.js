import $ from "jquery";
import "popper.js";
import "bootstrap";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, EffectFade } from "swiper/core";

SwiperCore.use([Navigation, EffectFade]);

$(document).ready(function () {
  new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})