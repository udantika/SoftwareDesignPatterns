import React from 'react';
import './BookedProductsPage.css';

const BookedProductsPage = ({ bookedProducts }) => {
    return (
        <div className="booked-products-page">
            <h1>Booked Products</h1>
            <div className="booked-product-list">
                {bookedProducts.length === 0 ? (
                    <p>No products booked yet.</p>
                ) : (
                    bookedProducts.map((product, index) => (
                        <div key={index} className="booked-product-card">
                            <img src={product.image} alt={product.name} />
                            <div className="booked-product-info">
                                <h2>{product.name}</h2>
                                <p>Size: {product.size}</p>
                                <p>Type: {product.type}</p>
                                <p>Color: {product.color}</p>
                                <p>Occasion: {product.occasion}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BookedProductsPage;
