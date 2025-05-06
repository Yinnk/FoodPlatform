import React, { useState } from 'react'; 
import { CardGrid } from "../components/CardGrid.jsx";
import { RestaurantDetailModal } from "../components/RestaurantModal.jsx";
import { OrderConfirmationModal } from "../components/OrderConfirmationModal.jsx";

export function RestaurantPage() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    const [orderConfirm, setOrderConfirm] = useState(null);
    const [showConfirmlModal, setShowConfirmModal] = useState(false);

    const handleCardClick = (restaurant) => {
        console.log('Restaurant clicked:', restaurant); // Debugging step
        setSelectedRestaurant(restaurant);
        setShowDetailModal(true);
    };

    const handleOrderConfirm = (restaurant) => {
        setOrderDetails({
          restaurant: restaurant.name,
          pickUpTime: restaurant.pickUpTime,
        });
        setShowDetailModal(false);
        setShowOrderModal(true);
      };

    return (
        <div>
            {/* Pass handleCardClick function to CardGrid */}
            <CardGrid onCardClick={handleCardClick} />
            
            <RestaurantDetailModal
                restaurant={selectedRestaurant}
                show={showDetailModal}
                onClose={() => setShowDetailModal(false)}
                onOrderConfirm={(restaurant) => {
                    setOrderConfirm({
                        restaurant: restaurant.name,
                        pickUpTime: restaurant.pickUpTime,
                    });
                    setShowDetailModal(false);
                    setShowConfirmModal(true);
                }}
            />
            <OrderConfirmationModal
                    order={orderConfirm}
                    show={showConfirmlModal}
                    onClose={() => setShowConfirmModal(false)}
                />

        </div>
    );
}
