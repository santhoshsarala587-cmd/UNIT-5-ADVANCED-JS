const productName = "Wireless Headphones";
let productPrice = 2499;
const brandName = "SoundMax";

const displayProduct = () => {
    const productMessage = `
    Product Name: ${productName}
    Brand: ${brandName}
    Price: Rs. ${productPrice}
    `;

    console.log(productMessage);

    const outputArea = document.getElementById("result");
    outputArea.innerHTML = productMessage.replace(/\n/g, "<br>");
};

document.getElementById("showProfile").addEventListener("click", displayProduct);
