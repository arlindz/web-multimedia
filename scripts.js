document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: "Product 1",
            image: "images/product1.jpg",
            video: "videos/product1.mp4",
            audio: "audio/product1.mp3"
        },
        {
            name: "Product 2",
            image: "images/product2.jpg",
            video: "videos/product2.mp4",
            audio: "audio/product2.mp3"
        },
        {
            name: "Product 3",
            image: "images/product3.jpg",
            video: "videos/product3.mp4",
            audio: "audio/product3.mp3"
        },
        {
            name: "Product 4",
            image: "images/product4.jpg",
            video: "videos/product4.mp4",
            audio: "audio/product4.mp3"
        },
        {
            name: "Product 5",
            image: "images/product5.jpg",
            video: "videos/product5.mp4",
            audio: "audio/product5.mp3"
        },
        {
            name: "Product 6",
            image: "images/product6.jpg",
            video: "videos/product6.mp4",
            audio: "audio/product6.mp3"
        }
        // Add more products as needed
    ];

    const carouselContent = document.getElementById('carousel-content');

    // Divide products into groups of 4
    const chunkSize = 4;
    for (let i = 0; i < products.length; i += chunkSize) {
        const chunk = products.slice(i, i + chunkSize);
        const isActive = i === 0 ? 'active' : '';
        let carouselItem = `<div class="carousel-item ${isActive}"><div class="row">`;
        chunk.forEach(product => {
            carouselItem += `
                <div class="col-md-3">
                    <img src="${product.image}" class="d-block w-100" alt="${product.name}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${product.name}</h5>
                        <p>
                            <a href="${product.video}" target="_blank">Watch Video</a> | 
                            <a href="${product.audio}" target="_blank">Listen Audio</a>
                        </p>
                    </div>
                </div>`;
        });
        carouselItem += '</div></div>';
        carouselContent.innerHTML += carouselItem;
    }

    // PixiJS example
    const pixiContainer = document.getElementById('pixi-container');
    const app = new PIXI.Application({ width: 800, height: 600 });
    pixiContainer.appendChild(app.view);

    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFF3300);
    graphics.drawCircle(400, 300, 50);
    graphics.endFill();

    app.stage.addChild(graphics);
});
