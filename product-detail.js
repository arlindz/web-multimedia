window.addEventListener('load', () => {
    const productDetail = JSON.parse(localStorage.getItem('productDetail'));
    console.log("ran")
    if (productDetail) {
        console.log(productDetail);
        document.getElementById('product-title').textContent = productDetail.title;
        document.getElementById('product-description').textContent = productDetail.description;
        document.getElementById('product-image').src = productDetail.image;
        document.getElementById('product-video').src = productDetail.video;
        document.getElementById('product-rating').textContent = productDetail.rating;
        document.getElementById('product-reviews').textContent = productDetail.reviews;
        document.getElementById('product-price').textContent = productDetail.price;
    }
});
