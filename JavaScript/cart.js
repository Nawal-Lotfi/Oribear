/* ------------------------- POST Method ------------------------- */

const insertPost = async function (data) { //fonction pour envoyer les données (utilisateur et tableau de produits) à l'API pour effectuer une commande
    let response = await fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST', //méthode POST puisqu'il s'agit d'un envoi
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let repJson = await response.json();
    return repJson;
}


/* ------------------------- Cart Icon Display ------------------------- */

function displayQuantity() {
    const quantityInCart = JSON.parse(localStorage.getItem('product')).length;
    const cart = document.getElementById('cartQuantity');
    const div = document.createElement('div');


    cart.innerHTML += '<p>' + quantityInCart + '</p>'



}

displayQuantity();


document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault()
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;

    let teddiesAdded = JSON.parse(localStorage.getItem('product'));
    let products = [];

    for (i = 0; i < teddiesAdded.length; i++) {
        products.push(teddiesAdded[i].id)
    }

    const contact = { "firstName": firstName, "lastName": lastName, "address": address, "city": city, "email": email };
    const order = { contact, products };

    insertPost({ "contact": contact, "products": products }).then(data => console.log(data)).then(function (response) {
        localStorage.setItem('orderId', response.orderId)
    });

    const myJSON = JSON.stringify(contact);
    localStorage.setItem('contactData', myJSON);
});

/* ------------------------- Display Cart Content ------------------------- */

const cartView = document.getElementById('cartView');

function renderCart(data) {
    const teddy = JSON.parse(localStorage.getItem('product'));
    var table = document.createElement('tbody');
    table.setAttribute('id', 'table');
    const tfoot = document.createElement('tfoot');
    tfoot.setAttribute('id', 'sum');

    table.innerHTML += "<tr><th>Mes achats</th><th>Teddy</th><th>Couleur</th><th>Prix</th></tr>";

    for (let i in teddy) {
        const row = document.createElement('tr');
        row.innerHTML += "<td><img class=\"cartImage\" src=\"" + teddy[i].image + "\"></td><td>" + teddy[i].name + "</td><td>" + teddy[i].color + "</td><td>" + teddy[i].price / 100 + " €</td><td><button class=\"removeButton\">x</button></td > "
        table.appendChild(row);
    }

    cartView.appendChild(table);
    tfoot.innerHTML += "<tr><td>Total</td><td>" + teddy.price + " €</td></tr>";
    table.appendChild(tfoot);


    var table = document.getElementById('table'), sumVal = 0;

    for (i = 1; i < table.rows.length; i++) {
        sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
    }

    var sumVal = document.getElementById('sum').innerHTML = "Total = " + sumVal + " €";
}

renderCart();

function removeItem() {
    const removeItemButton = document.getElementsByClassName('removeButton');
    for (i = 0; i < removeItemButton.length; i++) {
        const button = removeItemButton[i];
        button.addEventListener('click', function (event) {
            const buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            updateCartTotal();
        })
    }

}

removeItem();

function updateCartTotal() {
    var table = document.getElementById('table'), sumVal = 0;
    for (i = 1; i < table.rows.length; i++) {
        sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
    }

    var sumVal = document.getElementById('sum').innerHTML = "Total = " + sumVal + " €";
}

const sumVal = document.getElementById('sum').innerHTML;

console.log(sumVal);




let teddiesAdded = JSON.parse(localStorage.getItem('product'));
let products = [];

for (i = 0; i < teddiesAdded.length; i++) {
    products.push(teddiesAdded[i].id)
}

console.log(products);