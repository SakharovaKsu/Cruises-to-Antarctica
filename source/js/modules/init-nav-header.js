export const initNavHeader = () => {
  const header = document.querySelector('.header');

  if (!header) {
    return;
  }

  // const headerNav = header.querySelector('.header');
  const headerButton = header.querySelector('.header__button');
  const headerLinks = header.querySelectorAll('.header__link');

  header.classList.remove('header--nojs');

  const onToggleMenu = () => {
    header.classList.toggle('header--closed');
    header.classList.toggle('header--opened');
    document.body.classList.toggle('scroll-lock');
  };

  headerButton.addEventListener('click', () => onToggleMenu());

  document.addEventListener('click', (e) => {

    const click = e.composedPath().includes(header);

    if (!click) {
      header.classList.remove('header--opened');
      header.classList.add('header--closed');
      document.body.classList.remove('scroll-lock');
    }
  });

  headerLinks.forEach((link) => {
    link.addEventListener('click', () => onToggleMenu());
  });
};
