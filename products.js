window.addEventListener('load', () => {
    console.log("loaded")
    const pages = [];
    const buttons = [];
    const BEGIN_PAGE = 1;

    for (let i = BEGIN_PAGE; document.getElementById(`page${i}`); i++) {
        pages.push(document.getElementById(`page${i}`));
    }
    for (let i = BEGIN_PAGE; document.getElementById(`page${i}-pagination-button`); i++) {
        buttons.push(document.getElementById(`page${i}-pagination-button`));
    }
    console.log(buttons);
    for (let i = 0; i < pages.length; i++) {
        buttons[i].addEventListener('click', () => {
            for (let j = 0; j < pages.length; j++) {
                pages[j].style.display = 'none';
                console.log("Clicked ");
            }
            pages[i].style.display = 'flex';
        });
    }
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.card-title').textContent;
            const description = card.querySelector('.card-text').textContent;
            const rating = card.querySelector('.card-rating').textContent;
            const reviews = card.querySelector('.card-rating-count').textContent;
            const image = card.querySelector('.card-img-top').getAttribute('src');
            const price = card.querySelector('.card-price').textContent;
            const video = card.querySelector('.video-link').textContent;
            
            localStorage.setItem('productDetail', JSON.stringify({ title, description, image, rating, reviews, price, video }));
            window.location.href = 'products/product.html';
        });
    });
});
