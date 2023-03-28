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

  document.addEventListener('click', (evt) => {
    const click = evt.composedPath().includes(headerNav);

    if (!click) {
      onToggleMenu();
    }
  });

  headerLinks.forEach((link) => {
    link.addEventListener('click', () => onToggleMenu());
  });
};
