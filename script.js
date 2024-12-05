function searchProducts(query) {
    const products = document.querySelectorAll('.product');
        products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
            if (name.includes(query.toLowerCase())) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';}});}

document.addEventListener("DOMContentLoaded", () => {
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;             
function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    }
    slides[currentIndex].classList.add('active');
    setInterval(showNextSlide, 3000);
    });

// JavaScript for toggling the menu
const hamburger = document.getElementById('hamburger');
const menuBox = document.getElementById('menu-box');

hamburger.addEventListener('click', () => {
    menuBox.classList.toggle('open');
});   
    
 // Function to update the cart count
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cartItems.length;
  }

// Function to display cart items
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-container");

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p class='empty-cart'>Hey! Your cart is empty. Start adding items to it! <a href='index.html'>click here>></a></p>";
        return;
    }

    cartContainer.innerHTML = cartItems
        .map(
            (item, index) =>
                `<div class="cart-item">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p class="price"><strong>${item.price}</strong></p>
                        <p>${item.description}</p>
                    </div>
                    <button class="btn remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
                </div>`
        )
        .join("");
}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(cartItems)); 
    displayCartItems(); 
    updateCartCount(); 
}
document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();
    updateCartCount();
});

function callToOrder() {
window.location.href = "https://wa.me/+254798229783"
}