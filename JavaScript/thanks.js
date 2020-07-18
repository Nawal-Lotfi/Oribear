function renderThanks(data) {
    const contact = JSON.parse(localStorage.getItem('contactData'));
    const section = document.getElementById('section');

    const article = document.createElement('article');
    article.setAttribute('id', 'thanks');

    article.innerHTML += "<p style=\"text-align: center; margin-top: 75px;\" class=\"blop\">Merci " + contact.firstName + " " + contact.lastName + " pour votre confiance envers Orinoco !<br> Votre commande vous sera envoyée dans les plus brefs délais.</p>";

    section.appendChild(article);
};

renderThanks();