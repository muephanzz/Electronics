let cart = [];
const products = [
    { 
        id: 1, 
        name: "Samsung A05s", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/samsungA05s.webp', 
        description: `4GB RAM, 64GB Storage
                      5000 mAh Battery
                      50MP Main Camera 13MP Front Camera
                      AndroidTM 12 upgradable to 13
                      6.7 Screen display`
                    },{
        id: 2, 
        name: "Samsung A25", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/samsungA25.png', 
        description: `128 Storage
        6GB RAM
        5000 mAh Battery
        50MP Main Camera, 13MP Front Camera
        AndroidTM 14
        Side-mounted Fingerprint Sensor
        6.5″ Screen`},{
        id: 3, 
        name: "Samsung A05", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/samsungA05.png', 
        description: `4GB RAM, 64GB Storage
        5000 mAh Battery
        50MP Camera
        AndroidTM 13 Operating System
        Dual SIM
        6.7" Screen display`},{
        id: 3, 
        name: "Samsung A15", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/samsungA15.png', 
        description: `4GB RAM, 128GB Storage
        5,000mAh Battery
        50MP Main Camera, 13MP Front Camera
        AndroidTM 14
        Dual SIM
        6.5″ Screen`
    }
];

function toggleMenu() {
    const menu = document.getElementById("menu-items");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function showCategories() {
    const categoriesDropdown = document.getElementById('categories-dropdown');
    categoriesDropdown.style.display = categoriesDropdown.style.display === 'block' ? 'none' : 'block';
}

function showCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.onclick = () => showProductDetails(product);
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price}</div>
        `;
        productList.appendChild(productDiv);
    });
}

function showProductDetails(product) {
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `Price: $${product.price}`;
    document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function addToCart() {
    const productTitle = document.getElementById('product-title').textContent;
    const product = products.find(p => p.name === productTitle);
    cart.push(product);
    document.getElementById('cart-count').textContent = cart.length;
}

function buyNow() {
    alert("Proceeding to checkout...");
}

function searchProducts(query) {
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.onclick = () => showProductDetails(product);
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price}</div>
        `;
        productList.appendChild(productDiv);
    });
}