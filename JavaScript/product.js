const request = new XMLHttpRequest();
const str = window.location;
const url = new URL(str);
const idUrl = url.searchParams.get("id");
const uri = 'http://localhost:3000/api/teddies/' + idUrl;
const product = document.querySelector('#product');
const section = document.getElementsByTagName('section');

request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        response = JSON.parse(this.responseText);
        renderHTML(response);
    }
};

request.open('GET', uri);
request.send();


function renderHTML(data) {
    const div = document.createElement('div');
    const colors = data.colors;
    div.setAttribute('class', 'product');

    div.innerHTML += "<img class=\"teddyImage\" src=\"" + data.imageUrl + "\"><h1 class=\"teddyName\">" + data.name + "</h1><p class=\"teddyDescription\">" + data.description + "</p><p class =\"teddyPrice\">" + data.price / 100 + " €</p><select id=\"colorChoice\"></select>";
    product.appendChild(div);

    const form = document.getElementById('colorChoice');

    colors.forEach(displayColor);

    function displayColor(item) {
        document.getElementById("colorChoice").innerHTML += "<option>" + item + "</option>";
    };

    div.appendChild(document.getElementById('addTeddy'));
    div.appendChild(form);
};
/* ------------------------- Localstorage and Cart ------------------------- */

document.getElementById('product').addEventListener('click', function (a) {
    a.preventDefault();
    const color = document.getElementById('colorChoice');

    let teddies = {
        id: response._id,
        name: response.name,
        color: color.value,
        price: response.price,
        image: response.imageUrl
    }

    const teddiesAdded = localStorage.getItem('product');
    if (teddiesAdded) {
        teddiesInCArt = JSON.parse(teddiesAdded);
        teddiesInCArt.push(teddies);
        localStorage.setItem('product', JSON.stringify(teddiesInCArt));
        alert('Ajouté au panier !');
    } else {
        teddiesInCArt = [];
        teddiesInCArt.push(teddies);
        localStorage.setItem('product', JSON.stringify(teddiesInCArt));
        alert('Ajouté au panier !');
    }


    //products.push(teddies);
    //localStorage.setItem('products', JSON.stringify(products));

    //alert(response.name + ' a été ajouté à votre panier !')
});