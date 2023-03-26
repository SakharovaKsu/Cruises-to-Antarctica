export const navHeader = () => {
  const headerNav = document.querySelector('.header__nav');
  const headerButton = document.querySelector('.header__button');
  const headerLink = document.querySelectorAll('.header__link');
  const headerOverlay = document.querySelector('.header__overlay');

  headerNav.classList.remove('header__nav--nojs');

  const onToggleMenu = () => {
    headerNav.classList.toggle('header__nav--closed');
    headerNav.classList.toggle('header__nav--opened');
    document.body.classList.toggle('scroll-lock');
  };

  headerButton.addEventListener('click', function () {
    onToggleMenu();
  });

  headerOverlay.addEventListener('click', function () {
    headerNav.classList.remove('header__nav--opened');
  });

  headerLink.forEach((link) => {
    link.addEventListener('click', function () {
      onToggleMenu();
    });
  });
};
