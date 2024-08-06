import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "@/StoreProvider"; // Adjust the import path as needed
import "./WishList.css"; // Import your custom styles

const WishList = () => {
  const navigate = useNavigate();
  const { wishList, toggleFavorite, addToCart } = useContext(StoreContext);

  return (
    <div className="wishlist-page">
      <div className="nav-bar-start">
      <nav className="navbar">
        <div className="navbar-right">
          <button onClick={() => navigate("/shopbycategory")} className="nav-button">
            Home
          </button>
          <button onClick={() => navigate("/toyproduct")} className="nav-button">
            Toys
          </button>
          <button onClick={() => navigate("/cart")} className="nav-button">
            Cart 🛒
          </button>
        </div>
      </nav>
      </div>
      <main className="wishlist-products">
        <h2 className="font-bold">Your WishList</h2>
        <div className="wishlist-grid">
          {wishList.length > 0 ? (
            wishList.map((product) => (
              <div className="wishlist-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Size: {product.size}</p>
                <p>Color: {product.color}</p>
                <p>Shape: {product.shape}</p>
                <p>₹{product.price}</p>
                <div className="flex gap-2">
                  <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                  <button className="remove-from-wishlist" onClick={() => toggleFavorite(product)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="font-bold">Your wishlist is empty</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default WishList;
