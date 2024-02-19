const header = document.querySelector('.header');
const navItems = document.querySelectorAll('.navigation__item');
const contactsToggle = document.querySelector('.header__contacts-link-toggle');

const handleHeader = () => {
  if (window.scrollY > 40) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
};

addEventListener('scroll', handleHeader);

navItems.forEach((item) =>
  item.addEventListener('mouseover', () => {
    const active = [...navItems].find((item) =>
      item.classList.contains('active')
    );

    active.classList.remove('active');
    item.classList.add('active');
  })
);

contactsToggle.addEventListener('click', () => {
  contactsToggle.classList.toggle('active');
});
