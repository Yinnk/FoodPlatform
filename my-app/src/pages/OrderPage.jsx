import React from 'react';
import { OrderCardGrid } from '../components/OrderCardGrid.jsx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavItem } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../index.js';
import SignInAlert from '../components/SignInAlert.jsx';


export function OrderPage() {  
    const [user, setUser] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                setShowPopup(true);
            } else {
                setUser(currentUser);
            }
        });
        return () => unsub();
    }, []);

    if (showPopup) {
        return (
            <SignInAlert />
        );
    }


    return (
        <div>
            <Navbar />

            {/* Hero Section : need to change the layout*/}
            <section className="hero-section" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                <h1 className="hero-header">Order History</h1>
                <h2 className="hero-subtitle" style={{ fontWeight: 'normal', marginTop: '1rem'}}>Track, review, and manage your past and current orders.</h2>
                <p className="hero-description" style={{ maxWidth: '600px', margin: '1rem auto' }}>
                Stay on top of your surprise box reservations! View your upcoming orders, check their status, and revisit meals you've enjoyed. From tracking today’s meal to reordering your favorites, everything you need is here.
                </p>
            </section>

            <OrderCardGrid />
            <Footer />
        </div>
    )
}

