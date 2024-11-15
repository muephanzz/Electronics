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
        6.7 Screen display`}
    ,{
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
        6.5″ Screen`}
    ,{
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
        6.7" Screen display`}
    ,{
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
        6.5″ Screen`}
    ,{
        id: 4, 
        name: "Oppo A18", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/oppoA18.webp', 
        description: `OPPO A18 6.56" 90Hz Display 4GB+128GB 8MP Android 13 Side Fingerprint 5000mAh Type-C Charge Smart Phones IP54 Dust Splash Resistant`}
    ,{
        id: 5, 
        name: "Oppo A3x", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/oppoA3x.webp', 
        description: `Oppo A3x Smart phone,6.67 inches, 128GB ROM + 4GB RAM, Battery: 5100mAh (Dual SIM) 50MP`}
    ,{
        id: 6, 
        name: "Vivo Y03", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/vivoY03.jpg', 
        description: `Vivo Y03 - 6.56'' - 4GB RAM + 64GB ROM - Dual SIM - 5000mAh - Space Black (2YRs WRTY)`}
    ,{
         id: 7, 
        name: "Vivo Y17", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/vivoY03.jpg', 
        description: `Vivo Y17s - 6.56'', 6GB RAM + 128GB ROM - (Dual SIM) - 50MP - 5000mAh - Green`}
    ,{
        id: 8, 
        name: " Redmi 13c", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/redmi13c.webp', 
        description: `Network: Dual Sim, 3G, 4G, VoLTE, Wi-Fi
        Processor: Helio G85, Octa Core, 2 GHz
        RAM: 8GB
        ROM: 256GB
        Battery: 5000 mAh Battery
        Display: 6.74 inches, 720 x 1650 px
        ROM: 50 MP + Depth Sensor Rear & 8 MP Front Camera
        OS: Android v13
        25 months local warranty`}
    ,{
        id: 9, 
        name: " Redmi 14c", 
        price: 799, 
        category: 'smartphones', 
        image: 'images/redmi14c.webp', 
        description: `RAM: 8GB
        Internal Storage: 256GB
        Battery: 5160 mAh
        Main Camera: 50MP+2MP+0.08MP
        Front Camera: 13MP
        Display: 6.88 inches
        Processor: Mediatek Helio G81 Ultra
        OS: Android 14
        Connectivity: Dual sim, 2G, 3G, 4G, WI-FI
        Colors: Dreamy Purple,Midnight Black,Sage Green,Starry Blue`}
];
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').textContent = cart.length;
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
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
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
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}
