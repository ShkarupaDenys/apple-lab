const header = document.querySelector('.header');
const navigationBtn = document.querySelector('.header__nav-button');

export const handleHeader = () => {
    if (window.scrollY > 40) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}

addEventListener("scroll", handleHeader);

navigationBtn.addEventListener('mouseover', () => {
    console.log('check')
})
