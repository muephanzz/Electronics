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
                        <img src="${item.images}>
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