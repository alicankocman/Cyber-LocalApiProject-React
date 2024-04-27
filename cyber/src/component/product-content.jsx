//product-content.jsx
import React, { useState, useEffect } from "react";
import "./product-content.css";

function ProductContent() {
    const [products, setProducts] = useState([]);
console.log(products);
useEffect(() => {
    // API'den verileri çekme
    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) { // data bir dizi mi ve boş değil mi kontrol edin
                setProducts(data); // Tüm verileri products olarak ayarlayın
            } else {
                console.error('Products data not found in response:', data);
            }
        })
        .catch(error => console.error('Error fetching products:', error));
}, []);


    // Ürün kartlarını üçerli gruplara ayır
    const groupedProducts = [];
    for (let i = 0; i < products.length; i += 3) {
        groupedProducts.push(products.slice(i, i + 3));
    }

    return (
        <div className="product-content">
            {groupedProducts.map((row, index) => (
                <div key={index} className="product-row">
                    {row.map((product) => (
                        <ProductCard key={product.id} title={product.title} price={product.price} img={product.img} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function ProductCard({ title, price, img }) {
    return (
        <div className="product-card">
            <img className="like" src="https://w7.pngwing.com/pngs/387/843/png-transparent-favorite-heart-like-likes-love-loved-basic-ui-2-line-icon-thumbnail.png"></img>
            <img src={img} alt={title} className="product-image" />
            <h3>{title}</h3>
            <p>{price}</p>
            <input type="button" className="button7" value="Buy Now"></input>
        </div>
    );
}

export default ProductContent;
