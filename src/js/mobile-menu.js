const categories = document.querySelectorAll('.mobile-menu__category-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const bg = document.querySelector('.mobile-menu__background');

categories.forEach(category => category.addEventListener('click', () => {
    const selectedCategory = document.getElementById(category.dataset.mobileMenu);
    const btnBack = selectedCategory.querySelector('.mobile-menu__model-btn');

    selectedCategory.classList.add('active');

    btnBack.addEventListener('click', () => {
        selectedCategory.classList.remove('active')
    })
}))

const burger = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.classList.add('overflow');
})

bg.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('overflow');
    const selectedCategory = document.querySelector('.mobile-menu__model.active');

    if (selectedCategory) {
        selectedCategory.classList.remove('active')
    }
})
