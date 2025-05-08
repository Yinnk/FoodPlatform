import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../index.js'
import { onAuthStateChanged, signOut } from "firebase/auth";


const Navbar = () => {
    const [user, setUser] = useState(null);
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
            navigate('/signin');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
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

                        {!user ? (
                            <li>
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <button onClick={handleLogout} className="nav-link logout-button">
                                        Logout
                                    </button>
                                </li>
                               
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
