import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const NavLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Login',
      path: '/login',
    },
    {
      title: 'Register',
      path: '/register',
    },
  ];

  const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
  };

  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center">
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg">
        Flyrobe
      </div>
      <div className="w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 overflow-hidden">
        {NavLinks.map((links, index) => (
          <li key={index} className="list-none">
            <NavLink to={links.path}>{links.title}</NavLink>
          </li>
        ))}
        <ModeToggle />
        {isLoggedIn && (
          <div className="relative">
            <FaUserCircle className="text-2xl cursor-pointer" />
            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg overflow-hidden">
              <ul className="flex flex-col text-black">
                <li className="p-2 hover:bg-gray-200">
                  <NavLink to="/userdashboard">User Profile</NavLink>
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
