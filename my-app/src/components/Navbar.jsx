import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar bg-white shadow-md">
      <div className="nav-container flex justify-between items-center px-6 py-4">
        <div className="logo text-xl font-bold text-green-600">AppName</div>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Map</a></li>
            <li><a href="#" className="hover:text-green-600">Restaurants</a></li>
            <li><a href="#" className="hover:text-green-600">My Orders</a></li>
          </ul>
        </nav>
        <div className="nav-icons flex space-x-4">
          <img src="/imgs/search.jpg" alt="Search" className="w-6 h-6" />
          <img src="/imgs/profile.png" alt="Profile" className="w-6 h-6 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;



