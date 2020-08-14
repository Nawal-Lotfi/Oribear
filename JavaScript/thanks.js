/* const str = window.location;
const url = new URL(str);
const idURL = url.searchParams.get('orderId');
window.location.href = 'thanks.html?orderId=' + response.orderid;

/* ------------------------- Display Thanks ------------------------- */

function renderThanks(data) {
    const contact = JSON.parse(localStorage.getItem('contactData'));    // Récupère le nom et prénom de l'utilisateur
    const section = document.getElementById('section'); // Emplacement du contenu que l'on va créer
    const orderId = new URL(window.location).searchParams.get('orderId');
    const nbrOfArticles = JSON.parse(localStorage.getItem('product')).length;

    console.log(nbrOfArticles);

    const article = document.createElement('article');
    article.setAttribute('id', 'thanks');

    if (nbrOfArticles == 1) {
        article.innerHTML += `<p style="text-align: center; margin-top: 75px;" class="blop">Merci ${contact.firstName} ${contact.lastName} pour votre confiance envers Orinoco !
    <br> Vous avez commandé ${JSON.parse(localStorage.product).length} article qui vous sera expédié dans les plus brefs délais.
    <br> Votre numéro de commande est le ${orderId}, conservez le précieusement.</p>`;  //contenu créé en HTML
    } else {
        article.innerHTML += `<p style="text-align: center; margin-top: 75px;" class="blop">Merci ${contact.firstName} ${contact.lastName} pour votre confiance envers Orinoco !
        <br> Vous avez commandé ${JSON.parse(localStorage.product).length} articles qui vous seront expédiés dans les plus brefs délais.
        <br> Votre numéro de commande est le ${orderId}, conservez le précieusement.</p>`;  //contenu créé en HTML
    }

    section.appendChild(article); //rattachement du contenu à la section ciblée
};

renderThanks();
localStorage.clear();