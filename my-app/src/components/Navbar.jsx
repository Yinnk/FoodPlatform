import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar bg-white shadow-md">
      <div className="nav-container flex justify-between items-center">
        <div className="logo text-xl font-bold text-green-600">AppName</div>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/map" className="hover:text-green-600">Map</Link></li>
            <li><Link to="/restaurantpage" className="hover:text-green-600">Restaurants</Link></li>
            <li><Link to="/orderpage" className="hover:text-green-600">My Orders</Link></li>
          </ul>
        </nav>
        <div className="nav-icons flex space-x-4">
          <img src="/imgs/search.jpg" alt="Search" className="w-6 h-6" />
          <a href="/profile">
            <img
              src="/imgs/profile.png"
              alt="Profile"
              className="w-6 h-6 rounded-full cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
