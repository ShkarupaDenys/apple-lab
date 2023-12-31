const header = document.querySelector('.header');

export const handleHeader = () => {
    if (window.scrollY > 40) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}

addEventListener("scroll", handleHeader);
