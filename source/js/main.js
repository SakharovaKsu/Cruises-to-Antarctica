import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initPhoneMask} from './vendor/phone-mask';
import {navHeader} from './modules/nav-header';
import {initMap} from './modules/map';
import {scrollPage} from './modules/scroll-page';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  navHeader();
  scrollPage();

  initMap({
    id: 'map',
    initials: {
      center: [59.9387165, 30.3230474],
      controls: [],
      zoom: 16,
    },
    placemark: [
      {
        hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
      },
      {
        iconImageHref: 'img/svg/pin-map.svg',
        iconImageSize: [18, 22],
        iconLayout: 'default#image',
        iconShadow: false,
      }
    ],
  });

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initPhoneMask();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
