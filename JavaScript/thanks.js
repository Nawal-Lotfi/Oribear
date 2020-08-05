/* const str = window.location;
const url = new URL(str);
const idURL = url.searchParams.get('orderId');
window.location.href = 'thanks.html?orderId=' + response.orderid;

/* ------------------------- Display Thanks ------------------------- */

function renderThanks(data) {
    const contact = JSON.parse(localStorage.getItem('contactData'));
    const section = document.getElementById('section');

    const article = document.createElement('article');
    article.setAttribute('id', 'thanks');

    article.innerHTML += "<p style=\"text-align: center; margin-top: 75px;\" class=\"blop\">Merci " + contact.firstName + " " + contact.lastName + " pour votre confiance envers Orinoco !<br> Vous avez commandé " + JSON.parse(localStorage.product).length + " articles qui vous seront expédiés dans les plus brefs délais.</p>";

    section.appendChild(article);
};

renderThanks();

/* ------------------------- Display Cart Content ------------------------- */