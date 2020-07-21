/* ------------------------- POST Method ------------------------- */

const insertPost = async function (data) {
    console.log(data);
    let response = await fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let repJson = await response.json();
    return repJson;
}

/* ------------------------- GET Method(to display cart content) ------------------------- */

const request = new XMLHttpRequest();
const products = localStorage.getItem('products');
const uri = 'http://localhost:3000/api/teddies/' + products;

request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        response = JSON.parse(this.responseText);
        renderCart(response);
    }
};

request.open('GET', uri);
request.send();

/* ------------------------- Localstorage and Cart ------------------------- */

document.getElementById('submitButton').addEventListener('click', function (e) {
    //e.preventDefault();

    console.log('clap');

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;

    const contact = { "firstName": firstName, "lastName": lastName, "address": address, "city": city, "email": email };
    const products = [localStorage.getItem('products')];
    const order = { contact, products };

    insertPost({ "contact": contact, "products": products }).then(data => console.log(data));

    const myJSON = JSON.stringify(contact);
    localStorage.setItem('contactData', myJSON);
});


/* ------------------------- Display Cart Content ------------------------- */
const cartView = document.getElementById('cartView');

function renderCart(data) {

    const table = document.createElement('table');
    const row = document.createElement('tr');
    const tfoot = document.createElement('tfoot');

    table.innerHTML += "<tr><th>Mes achats</th><th>Couleur</th><th>Prix</th></tr>";
    row.innerHTML += "<td>" + "<img class=\"cartImage\" src=\"" + data.imageUrl + "\">" + data.name + "</td><td>" + data.colors[0] + "</td><td>" + data.price / 100 + " €</td>"
    tfoot.innerHTML += "<tr><td>Sum</td><td>" + data.price + "</td></tr>";

    cartView.appendChild(table);
    table.appendChild(row);
    //tfoot.appendChild(row);
}











/* ------------------------- Cart functions -------------------------

function incrementCart(ev) {

}

function decrementCart(ev) {

}

function getProducts(success, failure) {

}

function showProducts(products) {

}

function addItem(ev) {

}

function errorMessage(err) {

    console.error(err);
}


 */