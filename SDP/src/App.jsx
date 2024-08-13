import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layout/Homelayout';
import Home from './pages/Web/Home';
import Login from './pages/Web/Login';
import Register from './pages/Web/Register';
import Userlayout from './layout/Userlayout';
import UserDashboard from './pages/User/UserDashboard';
import AdminLayout from './layout/AdminLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUsers from './pages/Admin/AdminUsers';
import NotFound from './pages/Web/Notfound';
import ProductsPage from './pages/Web/ProductsPage';
import BookedProductsPage from './pages/Web/BookedProductsPage';
import Popup from './components/Popup';
import Western from './pages/Web/Western';
import Ethnic from './pages/Web/Ethnic';
import Accessories from './pages/Web/Accessories';
import Mens from './pages/Web/Mens';

const App = () => {
    const [bookedProducts, setBookedProducts] = useState([]);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleBooking = (product) => {
        setBookedProducts((prevBookedProducts) => [...prevBookedProducts, product]);
        setPopupMessage(`${product.name} has been booked successfully!`);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route 
                            path='/ProductsPage' 
                            element={<ProductsPage handleBooking={handleBooking} />} 
                        />
                        <Route 
                            path='/western' 
                            element={<Western handleBooking={handleBooking} />} 
                        />
                        <Route 
                            path='/Ethnic' 
                            element={<Ethnic handleBooking={handleBooking} />} 
                        />
                        <Route 
                            path='/Ethnic' 
                            element={<Ethnic handleBooking={handleBooking} />} 
                        />
                        <Route 
                            path='/Accessories' 
                            element={<Accessories handleBooking={handleBooking} />} 
                        />
                        <Route 
                            path='/mens-collection' 
                            element={<Mens handleBooking={handleBooking} />} 
                        />
                        <Route 
                            path='/BookedProductsPage' 
                            element={<BookedProductsPage bookedProducts={bookedProducts} />} 
                        />
                    </Route>

                    <Route element={<Userlayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            {popupVisible && <Popup message={popupMessage} onClose={closePopup} />}
        </>
    );
};

export default App;
