const toogleArticleBtn = document.querySelector('.article__button');
const articles = document.querySelector('.article__wrap');

if (toogleArticleBtn) {
    toogleArticleBtn.addEventListener('click', () => {
        articles.classList.toggle('article__wrap--hidden');
    
        if (articles.classList.contains('article__wrap--hidden')) {
            toogleArticleBtn.innerText = 'Узнать больше';
    
            return;
        }
    
        toogleArticleBtn.innerText = 'Свернуть';
    })
}
