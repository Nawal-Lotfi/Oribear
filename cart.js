const request = new XMLHttpRequest();
const str = window.location;
const url = new URL(str);
const idUrl = url.searchParams.get("id");
const uri = 'http://localhost:3000/api/teddies/' + idUrl;
const section = document.getElementsByTagName('section');

request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        response = JSON.parse(this.responseText);
        renderHTML(response);
    }
};

request.open('GET', uri);
request.send();


const cart = [];


