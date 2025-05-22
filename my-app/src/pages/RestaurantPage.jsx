import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../index.js';
import { useLocation } from 'react-router-dom';
import { CardGrid } from "../components/CardGrid.jsx";
import { RestaurantDetailModal } from "../components/RestaurantModal.jsx";
import { OrderConfirmationModal } from "../components/OrderConfirmationModal.jsx";
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import RestaurantHero from '../components/RestaurantHero.jsx';
import { OrderConfirmationCancelModal } from '../components/OrderConfirmCancelModal.jsx';
import  SignInAlert from '../components/SignInAlert.jsx';

export function RestaurantPage() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false); //for restaurant detail modal
    const [order, setOrder] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false); //for order confirmation modal
    const [showCancelModal, setShowCancelModal] = useState(false);  //for order confirmation/cancel modal
    
    const [user, setUser] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.restaurant) {
            setSelectedRestaurant(location.state.restaurant);
            setShowDetailModal(true);
        }
    }, [location.state]);

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
            <SignInAlert /> // alert if users is not logged in
        );
    }


    const saveOrderToLocalStorage = (order) => {
        console.log("Saving to localStorage:", order);
        const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
        existingOrders.push(order);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
      };
      

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
                    setSelectedRestaurant(restaurant);
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
                    saveOrderToLocalStorage({
                        ...selectedRestaurant,
                        id: Date.now().toString(), // generate a unique ID
                        pickedUp: false,
                      });
                      
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