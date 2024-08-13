import React, { useState } from 'react';
import './BookedProductsPage.css';

const BookedProductsPage = ({ bookedProducts }) => {
    const [confirmationStatus, setConfirmationStatus] = useState({});
    const [paymentStatus, setPaymentStatus] = useState({});

    const handleConfirm = (index) => {
        setConfirmationStatus((prevStatus) => ({
            ...prevStatus,
            [index]: true,
        }));
    };

    const handlePayment = (index) => {
        setPaymentStatus((prevStatus) => ({
            ...prevStatus,
            [index]: 'Paid',
        }));
    };

    return (
        <div className="booked-products-page">
            <h1>Booked Products</h1>
            <div className="booked-product-list">
                {bookedProducts.length === 0 ? (
                    <p>No products booked yet.</p>
                ) : (
                    bookedProducts.map((product, index) => (
                        <div key={index} className="booked-product-card">
                            <img src={product.image} alt={product.name} className="booked-product-image" />
                            <div className="booked-product-info">
                                <h2>{product.name}</h2>
                                <p>Size: {product.size}</p>
                                <p>Type: {product.type}</p>
                                <p>Color: {product.color}</p>
                                <p>Occasion: {product.occasion}</p>
                                <p>Price: ${product.price}</p>
                                <p>Orders: {product.quantity}</p>
                                <p>Status: {confirmationStatus[index] ? 'Confirmed' : 'Pending'}</p>
                                <p>Payment: {paymentStatus[index] || 'Unpaid'}</p>
                                {!confirmationStatus[index] && (
                                    <button
                                        onClick={() => handleConfirm(index)}
                                        className="confirm-button"
                                    >
                                        Confirm Booking
                                    </button>
                                )}
                                {confirmationStatus[index] && paymentStatus[index] !== 'Paid' && (
                                    <button
                                        onClick={() => handlePayment(index)}
                                        className="payment-button"
                                    >
                                        Make Payment
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BookedProductsPage;
