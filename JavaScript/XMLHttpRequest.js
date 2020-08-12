function XMLRequest(url) {
    const request = new XMLHttpRequest();
    const pageLocation = window.location;
    const uri = new URL(pageLocation);

    const product = document.querySelector('#product');
    const section = document.getElementsByTagName('section');

    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            response = JSON.parse(this.responseText);
            renderHTML(response);
        };
    };
    request.open('GET', url);
    request.send();
};