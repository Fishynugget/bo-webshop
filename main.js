function filterProducten(categorie) {
    const producten = document.querySelectorAll('#product');

    producten.forEach(function (product) {
        if (product.dataset.categorie === categorie || categorie === 'alles') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

const zoekbalk = document.getElementById('zoek');

zoekbalk.addEventListener('input', function () {
    const zoekterm = zoekbalk.value.toLowerCase();
    const producten = document.querySelectorAll('#product');

    producten.forEach(function (product) {
        const naam = product.querySelector('#product-title').textContent.toLowerCase();
        if (naam.includes(zoekterm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

function addToCart(productName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let index = cart.findIndex((element) => element.name === productName);

    if (index >= 0) {
        cart[index].amount += 1;
    } else {
        cart.push({
            name: productName,
            amount: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}