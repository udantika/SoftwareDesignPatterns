import React, { useState } from 'react';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import Middle from '@/components/Web/Middle';
import Footer from '@/components/Web/Footer';
import ProductsPage from './ProductsPage';
import BookedProductsPage from './BookedProductsPage';
import Western from './Western';

const Home = () => {
  const [bookedProducts, setBookedProducts] = useState([]);
  const navigate = useNavigate();

  const handleBooking = (product) => {
    setBookedProducts((prev) => [...prev, product]);
    navigate('/BookedProductsPage');
  };

  const NavLinks = [
    { title: "NEW ARRIVALS", path: "/ProductsPage" },
    { title: "WESTERN", path: "/western" },
    { title: "ETHNIC", path: "/Ethnic" },
    { title: "ACCESSORIES", path: "/Accessories" },
    { title: "MENS COLLECTION", path: "/mens-collection" },
    { title: "BOOKED", path: "/BookedProductsPage" },
  ];

  return (
    <div>
      <div className="w-full h-[9vh] flex flex-row justify-center items-center bg-green-400">
        <div className='w-3/4 h-full font-bold flex flex-row justify-end items-center gap-14'>
          {NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))}
        </div>
      </div>

      <Middle />

      <div className="main-content">
        <Routes>
          <Route 
            path="/ProductsPage" 
            element={<ProductsPage onBookProduct={handleBooking} />} 
          />
          <Route 
            path="/western" 
            element={<Western onBookProduct={handleBooking} />} 
          />
          <Route 
            path="/BookedProductsPage" 
            element={<BookedProductsPage bookedProducts={bookedProducts} />} 
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
