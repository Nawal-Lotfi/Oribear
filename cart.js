/* ------------------------- Constantes ------------------------- */



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

/* ------------------------- Localstorage ------------------------- */



document.getElementById('submitButton').addEventListener('click', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;

    const contact = { "firstName": firstName, "lastName": lastName, "address": address, "city": city, "email": email };
    const products = ["5beaaa8f1c9d440000a57d95"]
    const order = { contact, products };

    insertPost({ "contact": contact, "products": products }).then(data => console.log(data));

    const myJSON = JSON.stringify(contact);
    localStorage.setItem('contactData', myJSON);
})


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


