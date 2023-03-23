export const navHeader = () => {
  let headerNav = document.querySelector('.header__nav');
  let headerButton = document.querySelector('.header__button');

  headerNav.classList.remove('header__nav--nojs');

  headerButton.addEventListener('click', function () {
    headerNav.classList.toggle('header__nav--closed');
    headerNav.classList.toggle('header__nav--opened');
  });
};
