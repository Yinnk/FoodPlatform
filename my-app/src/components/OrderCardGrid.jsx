import React, { useState, useEffect } from 'react';
import { OrderHistory } from '../data/OrderHistory.js';
import { OrderCard } from './OrderCard.jsx';
import { RestaurantDetailModal } from './RestaurantModal.jsx';

export function OrderCardGrid() {
    const [orders, setOrders] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    useEffect(() => {
        const localOrders = JSON.parse(localStorage.getItem('orders')) || [];
        const combinedOrders = [...localOrders, ...OrderHistory];
        setOrders(combinedOrders);
    }, []);
    
        const handleViewRestaurant = (restaurant) => {
        console.log("modal for:", restaurant);
        setSelectedRestaurant(restaurant);
    }

    const handleCloseModal = () => {
        setSelectedRestaurant(null);
    }

    return (
        <div className="container mt-4">
            <div className="row g-4 m-3">
                {orders.map((order, index) => (
                    <div key={index} className="col-12 col-md-6 mb-4">
                        <OrderCard restaurant={order} onViewRestaurant={handleViewRestaurant} />
                    </div>
                ))}
            </div>
            {selectedRestaurant && (
                <RestaurantDetailModal
                    restaurant={selectedRestaurant}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

