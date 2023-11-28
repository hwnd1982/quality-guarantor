import './index.sass';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.swiper', {
  speed: 600,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-btn-right',
    prevEl: '.swiper-btn-left',
  },
});

