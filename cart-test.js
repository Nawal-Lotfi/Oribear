/* ------------------------- Création du formulaire de contact ------------------------- */

const form = document.getElementById('form');

document.getElementById('submitButton').addEventListener('click', function () {
    console.log("Hello from button");

    fetch('http://localhost:3000/api/teddies/order').then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
    })





    var dataSend = new XMLHttpRequest();


    dataSend.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            response = JSON.parse(this.responseText);
        }
    };

    dataSend.open("POST", "http://localhost:3000/api/teddies/order");
    dataSend.setRequestHeader("Content-Type", "application/json");
    dataSend.send(JSON.stringify(response));



    const cart = [];

    var Item = function (name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function addItemToCart(name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                cart[i].price += price;
                return;
            };
        };

        var item = new Item(name, price, count);
        cart.push(item);

    };

    addItemToCart("Apple", 1.22, 1);
    addItemToCart("Pear", 1.72, 3);
    addItemToCart("Apple", 1.22, 1);
    addItemToCart("Apple", 1.22, 3);


    console.log(cart);

    function removeItemFromCart(name) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count--;
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
    }

    console.log(cart[0].count);
    removeItemFromCart("Apple");

    console.log(cart);
/*
// removeItemFromCartAll(name)

// clearCart()

// countCart()

// totalCart()

// listCart()

// saveCart()

// loadCart()*/