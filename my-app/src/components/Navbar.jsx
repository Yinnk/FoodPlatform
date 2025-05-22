import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../index.js';
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setShowLogoutPopup(true); // Show success popup
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleGoHome = () => {
    setShowLogoutPopup(false);
    navigate('/');
  };

  return (
    <>
      <header className="navbar bg-white shadow-md">
        <div className="nav-container flex justify-between items-center px-6 py-4">
          <div className="logo text-xl font-bold text-green-600">
            <Link to="/">AppName</Link>
          </div>

          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/restaurantpage">Restaurants</Link></li>
              <li><Link to="/orderpage">Orders</Link></li>
              <li><Link to="/mappage">Map</Link></li>

              {!user ? (
                <li>
                  <Link to="/signin" className="nav-link">Sign In</Link>
                </li>
              ) : (
                <li>
                  <button onClick={handleLogout} className="nav-link logout-button">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-2">You've been logged out</h2>
            <p className="mb-4">Thanks for visiting. Click below to return to the homepage.</p>
            <button
              onClick={handleGoHome}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
