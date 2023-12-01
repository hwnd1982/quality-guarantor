import Swiper from 'swiper';
import { Navigation, EffectCreative } from 'swiper/modules';

export const heroSwiper = () => {
  const swiper = document.querySelector('.hero__swiper');

  if (!swiper) return;

  new Swiper('.swiper', {
    speed: 1000,
    modules: [Navigation, EffectCreative],
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-100%", 0, 0],
        },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    virtualTranslate: true,
    navigation: {
      nextEl: '.swiper-btn-right',
      prevEl: '.swiper-btn-left',
    },
  });
};
