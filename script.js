function searchProducts(query) {
    const products = document.querySelectorAll('.product');
        products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
            if (name.includes(query.toLowerCase())) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';}});}

document.addEventListener("DOMContentLoaded", () => {
const slides = document.querySelectorAll('.slide'); // Select all slides
let currentIndex = 0;
                
    // Function to switch slides
function showNextSlide() {
    // Hide the current slide
    slides[currentIndex].classList.remove('active');
                
    // Move to the next slide
    currentIndex = (currentIndex + 1) % slides.length;
                
    // Show the new slide
    slides[currentIndex].classList.add('active');
    }
                
    // Start the slideshow with the first slide visible
    slides[currentIndex].classList.add('active');
                
    // Change slides every 3 seconds
    setInterval(showNextSlide, 3000);
    });
    