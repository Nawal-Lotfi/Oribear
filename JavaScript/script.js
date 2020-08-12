/* ------------------------- Page index ------------------------- */
const url = 'http://localhost:3000/api/teddies/';
XMLRequest(url);

/* ------------------------- Products rendering ------------------------- */

function renderHTML(data) { //fonction de création du contenu HTML

    const div = document.createElement('div'); //création de la div qui accueillera le contenu
    div.setAttribute('class', 'card-deck'); //card-deck pour une stylisation par Bootstrap

    for (i = 0; i < data.length; i++) { //exécute la fonction pour chacun des teddies (i) présents dans data, data étant équivalent à la 'response' renvoyée par l'API, soit les teddies
        div.innerHTML += `<div class="card col">
        <img src= ${data[i].imageUrl} alt = Teddy Bear class="card-img-top" \>
        <h5 class="card-title"> ${data[i].name}</h5>
        <p class="card-text">${data[i].description}<br \> ${data[i].price / 100}  €</p>
        <p class="teddy-btn" type="button">
        <a class="teddyButton" href="product.html?id=${data[i]._id}">Choisir ce Teddy !</a>
        </p>
        </div>`;
    }

    products.appendChild(div); //pour lier le contenu créé à l'ancre 'products' dans le DOM
};

/* ------------------------- Cart Icon Display ------------------------- */

function displayQuantity() {    // affiche un chiffre blanc sous l'icône du panier pour savoir combien d'articles y sont stockés sans besoin de l'ouvrir
    const quantityInCart = JSON.parse(localStorage.getItem('product')).length;  // utilise la longueur du tableau pour savoir le nombre d'articles (1 article == 1 ligne dans le tableau)
    const cart = document.getElementById('cartQuantity');
    const div = document.createElement('div');


    cart.innerHTML += `<p>${quantityInCart}</p>`   //création du HTML en question, en l'occurence juste un chiffre basé sur le storage.length
}

displayQuantity();


