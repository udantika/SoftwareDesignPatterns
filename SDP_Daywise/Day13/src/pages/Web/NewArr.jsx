import React, { useState } from "react";
import './NewArr.css'
const products = [
    {
      id: 1,
      name: 'Blue Jeans',
      price: 50,
      color: 'Blue',
      type: 'Jeans',
      sizes: ['S', 'M', 'L'],
      imageUrl: 'https://via.placeholder.com/200x250.png?text=Blue+Jeans',
    },
    {
      id: 2,
      name: 'Black Jeans',
      price: 70,
      color: 'Black',
      type: 'Jeans',
      sizes: ['M', 'L'],
      imageUrl: 'https://via.placeholder.com/200x250.png?text=Black+Jeans',
    },
    {
      id: 3,
      name: 'Track Pants',
      price: 30,
      color: 'Gray',
      type: 'Track Pants',
      sizes: ['S', 'M'],
      imageUrl: 'https://via.placeholder.com/200x250.png?text=Track+Pants',
    },
    // Add more products as needed
  ];
  
const NewArr = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [favorites, setFavorites] = useState([]);
  
    // Filter products based on selected color and type
    const filteredProducts = products.filter((product) => {
      return (
        (selectedColor === '' || product.color === selectedColor) &&
        (selectedType === '' || product.type === selectedType)
      );
    });
  
    // Sort products based on price
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });
  
    // Handle adding/removing favorites
    const toggleFavorite = (id) => {
      setFavorites((prevFavorites) =>
        prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id)
          : [...prevFavorites, id]
      );
    };
  
      return (
       <div className="NewArr">
        <div className="product-page">
      <div className="filters">
        <select onChange={(e) => setSelectedColor(e.target.value)}>
          <option value="">Select Color</option>
          <option value="Blue">Blue</option>
          <option value="Black">Black</option>
          <option value="Gray">Gray</option>
        </select>

        <select onChange={(e) => setSelectedType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Jeans">Jeans</option>
          <option value="Track Pants">Track Pants</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Type: {product.type}</p>
            <div>
              <label>Select Size:</label>
              <select>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <button className="add-to-cart">Add to Cart</button>
            <button
              className={`favorite-button ${favorites.includes(product.id) ? 'favorited' : ''}`}
              onClick={() => toggleFavorite(product.id)}
            >
              {favorites.includes(product.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
       </div>
      );
    };
    

export default NewArr