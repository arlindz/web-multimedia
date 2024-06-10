window.addEventListener('load', () => {
    const pages = [];
    const buttons = [];
    const BEGIN_PAGE = 1;

    for (let i = BEGIN_PAGE; document.getElementById(`page${i}`); i++) {
        pages.push(document.getElementById(`page${i}`));
    }
    for (let i = BEGIN_PAGE; document.getElementById(`page${i}-pagination-button`); i++) {
        buttons.push(document.getElementById(`page${i}-pagination-button`));
    }

    for (let i = 0; i < pages.length; i++) {
        buttons[i].addEventListener('click', () => {
            for (let j = 0; j < pages.length; j++) {
                pages[j].style.display = 'none';
            }
            pages[i].style.display = 'flex';
        });
    }

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            const image = card.getAttribute('data-image');
            const video = card.getAttribute('data-video');
            const rating = card.getAttribute('data-rating');
            const reviews = card.getAttribute('data-reviews');
            const price = card.getAttribute('data-price');

            localStorage.setItem('productDetail', JSON.stringify({ title, description, image, video, rating, reviews, price }));
            window.location.href = 'product-detail.html';
        });
    });
});
