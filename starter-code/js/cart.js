/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  cart.reset();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  }

  // TODO: Find the table body
  

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  var removebutton = document.getElementById('removebutton');
  // TODO: Save the cart back to local storage
  var productsFromLS = JSON.parse(localStorage.products);
  // TODO: Re-draw the cart table
  for (var i = 0; i < products.allProducts.length; i++){
    new Cart(productsFromLS[i].name);
    products.allProducts[i].render();
  }
}

removebutton.addEventListener('click', removeItemFromCart)


// This will initialize the page and draw the cart on screen
renderCart();
