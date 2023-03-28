export const initNavHeader = () => {
  const headerNav = document.querySelector('.header__nav');
  const headerButton = document.querySelector('.header__button');
  const headerLink = document.querySelectorAll('.header__link');

  headerNav.classList.remove('header__nav--nojs');

  const onToggleMenu = () => {
    headerNav.classList.toggle('header__nav--closed');
    headerNav.classList.toggle('header__nav--opened');
    document.body.classList.toggle('scroll-lock');
  };

  if (!headerButton) {
    return;
  } else {
    headerButton.addEventListener('click', function () {
      onToggleMenu();
    });
  }

  document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(headerNav);
    if (!click) {
      headerNav.classList.remove('header__nav--opened');
      headerNav.classList.add('header__nav--closed');
      document.body.classList.remove('scroll-lock');
    }
  });

  if (!headerLink) {
    return;
  } else {
    headerLink.forEach((link) => {
      link.addEventListener('click', function () {
        onToggleMenu();
      });
    });
  }
};
