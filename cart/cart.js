const cart = JSON.parse(localStorage.getItem('cart')) || [];
const list = document.querySelector('#products');

function fillCartList() {
    cart.forEach(element => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.name}</td>
            <td>${element.amount}</td>
        `;
        list.appendChild(row);
    });
}

fillCartList();