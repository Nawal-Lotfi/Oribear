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
    console.log(data);
    const colors = data.colors;
    div.setAttribute('class', 'product');
    console.log(colors);

    div.innerHTML += "<img class=\"teddyImage\" src=\"" + data.imageUrl + "\"><h1 class=\"teddyName\"> " + data.name + "</h1 > <p class=\"teddyDescription\">" + data.description + "</p><p class =\"teddyPrice\">" + data.price / 100 + " €</p><button class=\"selectTeddy\">Choisir cet ourson</button><select id=\"colorChoice\"></select>";
    product.appendChild(div);

    const form = document.getElementById('colorChoice');

    colors.forEach(displayColor);

    async function displayColor(item) {
        document.getElementById("colorChoice").innerHTML += "<option>" + item + "</option>";
    };



    div.appendChild(form);
};








// <form class=\"colorSelect\"><label for=\"Colors\">Choisir une couleur : </label><br><select name=\"colors\"><option value=\"" + data.colors[0] + "\">" + data.colors[0] + "</option><option value=\"" + data.colors[1] + "\">" + data.colors[1] + "</option><option value=\"" + data.colors[2] + "\">" + data.colors[2] + "</option><option value=\"" + data.colors[3] + "\">" + data.colors[3] + "</option></select></form>


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