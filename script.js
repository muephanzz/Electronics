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