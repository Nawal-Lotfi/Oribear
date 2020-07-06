const request = new XMLHttpRequest();
const url = 'http://localhost:3000/api/teddies';
const products = document.querySelector('#products');
const section = document.getElementsByTagName('section');

request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        response = JSON.parse(this.responseText);
        renderHTML(response);
    }
};

request.open('GET', url);
request.send();


function renderHTML(data) {

    const div = document.createElement('div');
    div.setAttribute('class', 'card-deck');

    for (i = 0; i < data.length; i++) {
        div.innerHTML += "<div class=\"card col\">" + "<img src=\" " + data[i].imageUrl + " \" alt = Teddy Bear class=\"card-img-top\" \> " + " <h5 class=\"card-title\">" + data[i].name + "</h5>" +
            "<p class=\"card-text\">" + data[i].description + "<br \>" + data[i].price / 100 + " €</p><p class=\"teddy-btn\" type=\"button\"><a class=\"teddyButton\" href=product.html?id=" + data[i]._id + ">Choisir ce Teddy !</a></p></div>";
    }

    products.appendChild(div);
};

renderHTML();











/*
const params = new URLSearchParams(window.location.search);

let product = null;
let url = 'http://localhost:3000/api/teddies/' + params.get('id');

async function retrieveContent(url) {
    let result = await fetch(url).then(response => {
        return response.json();
    })
    return result;
}

retrieveContent(url).then(productSelected => {
    let container = document.getElementById('product-container');
    container.innerHTML = createArticleHtml(productSelected);
    product = productSelected;
});
*/

/*
function renderHTML(data) {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    const image = document.getElementsByClassName("teddysImage");
    const name = document.getElementsByClassName("teddysName");
    const para = document.getElementsByClassName("teddysDescription");

    image.innerHTML = "<img"
};

renderHTML();

*/