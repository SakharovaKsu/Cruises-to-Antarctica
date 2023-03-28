export const initNavHeader = () => {
  const header = document.querySelector('.header');

  if (!header) {
    return;
  }

  const headerNav = header.querySelector('.header__nav');
  const headerButton = header.querySelector('.header__button');
  const headerLinks = header.querySelectorAll('.header__link');

  headerNav.classList.remove('header__nav--nojs');

  const onToggleMenu = () => {
    headerNav.classList.toggle('header__nav--closed');
    headerNav.classList.toggle('header__nav--opened');
    document.body.classList.toggle('scroll-lock');
  };

  headerButton.addEventListener('click', () => onToggleMenu());

  document.addEventListener('click', (e) => {

    const click = e.composedPath().includes(headerNav);

    if (!click) {
      headerNav.classList.remove('header__nav--opened');
      headerNav.classList.add('header__nav--closed');
      document.body.classList.remove('scroll-lock');
    }
  });

  headerLinks.forEach((link) => {
    link.addEventListener('click', () => onToggleMenu());
  });
};
