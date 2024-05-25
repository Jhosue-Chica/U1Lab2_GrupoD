document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "10 NUGGETS", price: "USD 12.69", quantity: "3 u.", imgSrc: "../assets/img/productos.jpg" },
        { name: "MARTES LOCO 9 PRESAS", price: "USD 101.34", quantity: "9 u.", imgSrc: "../assets/img/productos.jpg" },
        { name: "10 PRESAS KFC", price: "USD 15.50", quantity: "1 u.", imgSrc: "../assets/img/productos.jpg" },
    ];

    const orderProductsContainer = document.querySelector(".order-products");
    const productTemplate = document.getElementById("product-template").content;

    products.forEach(product => {
        const productCard = productTemplate.cloneNode(true);
        productCard.querySelector(".product-img").src = product.imgSrc;
        productCard.querySelector(".product-name").textContent = product.name;
        productCard.querySelector(".product-price").textContent = product.price;
        productCard.querySelector(".product-quantity").textContent = product.quantity;
        orderProductsContainer.appendChild(productCard);
    });

    document.getElementById("subtotal").textContent = "USD 119.94";
    document.getElementById("taxes").textContent = "USD 9.59";
    document.getElementById("shipping-cost").textContent = "USD 0.00";
    document.querySelector(".pay-now-btn").addEventListener("click", () => {
        alert("Su pago se ha realizado con éxito");
    });
});
