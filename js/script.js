$(document).ready(function () {
    const products = [
        { src: '../img/1.jpeg', price: getRandomPrice() },
        { src: '../img/2.jpg', price: getRandomPrice() },
        { src: '../img/3.jpg', price: getRandomPrice() },
        { src: '../img/4.jpeg', price: getRandomPrice() },
        { src: '../img/5.jpg', price: getRandomPrice() },
        { src: '../img/6.png', price: getRandomPrice() },
        { src: '../img/7.png', price: getRandomPrice() },
        { src: '../img/8.jpg', price: getRandomPrice() },
        { src: '../img/9.jpg', price: getRandomPrice() },
        { src: '../img/10.png', price: getRandomPrice() },
        { src: '../img/11.png', price: getRandomPrice() },
        { src: '../img/12.jpg', price: getRandomPrice() },
        { src: '../img/13.png', price: getRandomPrice() },
        { src: '../img/14.jpg', price: getRandomPrice() },
        { src: '../img/15.png', price: getRandomPrice() },
        { src: '../img/16.png', price: getRandomPrice() },
        { src: '../img/17.png', price: getRandomPrice() },
        { src: '../img/18.png', price: getRandomPrice() },
        { src: '../img/19.png', price: getRandomPrice() },
        { src: '../img/20.png', price: getRandomPrice() },
        { src: '../img/21.png', price: getRandomPrice() },
        { src: '../img/22.png', price: getRandomPrice() },
        { src: '../img/23.png', price: getRandomPrice() },
        { src: '../img/24.png', price: getRandomPrice() },
        { src: '../img/25.png', price: getRandomPrice() },
        { src: '../img/26.png', price: getRandomPrice() },
        { src: '../img/27.png', price: getRandomPrice() },
        { src: '../img/28.png', price: getRandomPrice() },
        { src: '../img/29.png', price: getRandomPrice() },
        { src: '../img/30.png', price: getRandomPrice() },
        { src: '../img/31.png', price: getRandomPrice() },
        { src: '../img/32.png', price: getRandomPrice() },
        { src: '../img/33.png', price: getRandomPrice() },
        { src: '../img/34.png', price: getRandomPrice() },
        { src: '../img/35.png', price: getRandomPrice() },
        { src: '../img/36.png', price: getRandomPrice() },
        { src: '../img/37.png', price: getRandomPrice() },
        { src: '../img/38.png', price: getRandomPrice() },
        { src: '../img/39.png', price: getRandomPrice() },
        { src: '../img/40.png', price: getRandomPrice() },
        { src: '../img/41.png', price: getRandomPrice() },
        { src: '../img/42.png', price: getRandomPrice() },
        { src: '../img/43.png', price: getRandomPrice() },
        { src: '../img/44.png', price: getRandomPrice() },
        { src: '../img/45.png', price: getRandomPrice() },
        { src: '../img/46.png', price: getRandomPrice() },
        { src: '../img/47.png', price: getRandomPrice() },
        { src: '../img/48.png', price: getRandomPrice() },
        { src: '../img/49.png', price: getRandomPrice() },
        { src: '../img/50.png', price: getRandomPrice() },

    ];

    function getRandomPrice() {
        return Math.floor(Math.random() * (600 - 300 + 1)) + 300 + ' ₺';
    }

    function loadGallery() {
        $('#gallery').empty();
        products.forEach(product => {
            $('#gallery').append(`
                <div class="gallery-item">
                    <img src="${product.src}" alt="Product">
                    <div class="price">${product.price}</div>
                    <a href="#" class="add-to-cart-btn">Sepete Ekle</a>
                </div>
            `);
        });
    }

    loadGallery();
});







