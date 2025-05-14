import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../index.js';

import { CardGrid } from "../components/CardGrid.jsx";
import { RestaurantDetailModal } from "../components/RestaurantModal.jsx";
import { OrderConfirmationModal } from "../components/OrderConfirmationModal.jsx";
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import RestaurantHero from '../components/RestaurantHero.jsx';
import { OrderConfirmationCancelModal } from '../components/OrderConfirmCancelModal.jsx';

export function RestaurantPage() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false); //for restaurant detail modal
    const [order, setOrder] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false); //for order confirmation modal
    const [showCancelModal, setShowCancelModal] = useState(false);  //for order confirmation/cancel modal
    
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

    const handleCardClick = (restaurant) => {
        setSelectedRestaurant(restaurant);
        setShowDetailModal(true);
    };

    if (showPopup) {
        return (
            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                background: 'rgba(0,0,0,0.6)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', zIndex: 9999
            }}>
                <div style={{
                    background: 'white', padding: '2rem', borderRadius: '1rem',
                    textAlign: 'center', maxWidth: '400px'
                }}>
                    <h2 style={{ color: '#003559' }}>Access Restricted</h2>
                    <p>You must be signed in to view this page.</p>
                    <button
                        onClick={() => navigate('/signin')}
                        style={{
                            marginTop: '1rem',
                            padding: '0.6rem 1.2rem',
                            backgroundColor: '#003559',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Go to Sign In
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <RestaurantHero />
                <CardGrid onCardClick={handleCardClick} />
            </main>

            <footer>
                <Footer />
            </footer>

            <RestaurantDetailModal
                restaurant={selectedRestaurant}
                show={showDetailModal}
                onClose={() => setShowDetailModal(false)}
                onOrder={(restaurant) => {
                    setOrder({
                        restaurant: restaurant.name,
                        pickUpTime: restaurant.pickUpTime,
                    });
                    setShowDetailModal(false);
                    setShowCancelModal(true); // this opens the "Confirm or Cancel" modal
                }}
                
            />

            <OrderConfirmationCancelModal
                show={showCancelModal}
                order={selectedRestaurant}
                onClose={() => setShowCancelModal(false)} // fallback close
                onConfirm={() => {
                    setShowCancelModal(false);       // hide cancel/confirm modal
                    setShowConfirmModal(true);       // show final confirmation modal
                }}
                onCancel={() => {
                    setShowCancelModal(false);       // just close
                    setOrder(null);                  // clear the order
                }}
            />

            <OrderConfirmationModal
                order={order}
                show={showConfirmModal}
                onClose={() => {
                    setShowConfirmModal(false);
                }}
            />


            
        </div>
    );
}