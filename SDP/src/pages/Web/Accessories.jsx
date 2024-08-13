import React, { useState } from 'react';
import './Accessories.css'; // Import the CSS file

const productsData = [
    // Sample data with multiple images
    {
        id: 1,
        name: 'Red Dress',
        size: 'M',
        type: 'Accessories',
        color: 'Red',
        occasion: 'Party',
        price: 50,
        images: [
            'https://www.google.com/imgres?q=dresses&imgurl=https%3A%2F%2Fimages-cdn.ubuy.co.in%2F65be3bee3883e011777bb265-royal-blue-lace-wedding-dresses-off-the.jpg&imgrefurl=https%3A%2F%2Fwww.ubuy.co.in%2Fproduct%2FFO006CATQ-royal-blue-lace-wedding-dresses-off-the-shoulder-appliques-sequins-ball-gowns&docid=tg9DHwGw5CIRgM&tbnid=Nsn6AjXT-sIC2M&vet=12ahUKEwjY4ZnCsu2HAxVbzjgGHfT_IaEQM3oECHsQAA..i&w=1000&h=1000&hcb=2&ved=2ahUKEwjY4ZnCsu2HAxVbzjgGHfT_IaEQM3oECHsQAA',
            'hhttps://www.google.com/imgres?q=dresses&imgurl=https%3A%2F%2Fimages.meesho.com%2Fimages%2Fproducts%2F235940490%2Fxqfct_512.webp&imgrefurl=https%3A%2F%2Fwww.meesho.com%2Fnew-trending-stylish-girls-dresses%2Fp%2F3wh0ui&docid=cIUb8Pad3gNC6M&tbnid=gjCqOpHVjpQ2SM&vet=12ahUKEwjY4ZnCsu2HAxVbzjgGHfT_IaEQM3oFCIEBEAA..i&w=512&h=696&hcb=2&ved=2ahUKEwjY4ZnCsu2HAxVbzjgGHfT_IaEQM3oFCIEBEAA',
            'https://example.com/images/red-dress-3.jpg'
        ]
    },
    {
        id: 2,
        name: 'Blue Jeans',
        size: 'L',
        type: 'Casual',
        color: 'Blue',
        occasion: 'Casual',
        price: 40,
        images: [
            'https://example.com/images/blue-jeans-1.jpg',
            'https://example.com/images/blue-jeans-2.jpg'
        ]
    },
];

const Accessories = ({ handleBooking }) => {
    const [filters, setFilters] = useState({
        size: '',
        type: '',
        color: '',
        occasion: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const filteredProducts = productsData.filter((product) => {
        return (
            (filters.size === '' || product.size === filters.size) &&
            (filters.type === '' || product.type === filters.type) &&
            (filters.color === '' || product.color === filters.color) &&
            (filters.occasion === '' || product.occasion === filters.occasion)
        );
    });

    const handleSlider = (direction, productId) => {
        const productCard = document.querySelector(`.product-card[data-id='${productId}']`);
        const slider = productCard.querySelector('.slider');
        const images = slider.children;
        const totalImages = images.length;
        let currentIndex = [...images].findIndex(img => img.classList.contains('active'));

        if (currentIndex === -1) currentIndex = 0;

        // Remove the active class from the current image
        images[currentIndex].classList.remove('active');

        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % totalImages;
        } else {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        }

        // Add the active class to the new image
        images[currentIndex].classList.add('active');

        // Adjust the slider position
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    return (
        <div className='accessories'>
        <div className="products-page">
            <header className="products-header">
                <h1>Explore Our Fashion Collection</h1>
                <p>Find the perfect outfit for any occasion. Browse our latest arrivals and book your favorites!</p>
            </header>
            <div className="filters">
                <select name="size" value={filters.size} onChange={handleFilterChange}>
                    <option value="">All Sizes</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                </select>
                <select name="type" value={filters.type} onChange={handleFilterChange}>
                    <option value="">All Types</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Ethnic">Ethnic</option>
                    <option value="Casual">Casual</option>
                </select>
                <select name="color" value={filters.color} onChange={handleFilterChange}>
                    <option value="">All Colors</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                </select>
                <select name="occasion" value={filters.occasion} onChange={handleFilterChange}>
                    <option value="">All Occasions</option>
                    <option value="Party">Party</option>
                    <option value="Casual">Casual</option>
                    <option value="Formal">Formal</option>
                </select>
            </div>
            <div className="product-list">
                {filteredProducts.length === 0 ? (
                    <p>No products found. Please adjust your filters.</p>
                ) : (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-card" data-id={product.id}>
                            <div className="product-images">
                                <button className="prev" onClick={() => handleSlider('prev', product.id)}>❮</button>
                                <div className="slider">
                                    {product.images.map((image, index) => (
                                        <img key={index} src={image} alt={`${product.name} design ${index + 1}`} className={index === 0 ? 'active' : ''} />
                                    ))}
                                </div>
                                <button className="next" onClick={() => handleSlider('next', product.id)}>❯</button>
                            </div>
                            <div className="product-info">
                                <h2>{product.name}</h2>
                                <p>Size: {product.size}</p>
                                <p>Type: {product.type}</p>
                                <p>Color: {product.color}</p>
                                <p>Occasion: {product.occasion}</p>
                                <p>Price: ${product.price}</p>
                                <button onClick={() => handleBooking(product)}>Book Now</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
        </div>
    );
};

export default Accessories;
