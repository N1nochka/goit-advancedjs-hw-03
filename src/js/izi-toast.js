import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// SVG: восьмиугольник 24x24 с крестом внутри
const octagonCrossSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
  <path d='M7 3H17L21 7V17L17 21H7L3 17V7L7 3Z' stroke='white' stroke-width='1.5' fill='none'/>
  <path d='M15 9L9 15M9 9L15 15' stroke='white' stroke-width='1.5' stroke-linecap='round'/>
</svg>`;

const octagonCrossDataUri = 'data:image/svg+xml;utf8,' + encodeURIComponent(octagonCrossSVG);

// Ошибка
export const errorTost = (msg) => {
  return iziToast.show({
    class: 'custom-error-toast',
    timeout: 4000,
    close: true,
    overlay: false,
    position: 'topRight',
    title: '',
    message: msg,
    progressBar: false,

    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
    closeOnClick: true,
  });
};

// Info
// Info
export const infoTost = (msg) => {
  return iziToast.show({
    class: 'custom-info-toast',
    timeout: 3000,
    close: true,
    overlay: false,
    position: 'topRight',
    title: '',
    message: msg,
    progressBar: false,
    // Никаких image, icon и т.д.
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
    closeOnClick: true,
  });
};