import React, { useState } from 'react'; 
import { CardGrid } from "../components/CardGrid.jsx";
import { RestaurantDetailModal } from "../components/RestaurantModal.jsx";

export function RestaurantPage() {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    const handleCardClick = (restaurant) => {
        console.log('Restaurant clicked:', restaurant); // Debugging step
        setSelectedRestaurant(restaurant);
        setShowDetailModal(true);
    };

    return (
        <div>
            {/* Pass handleCardClick function to CardGrid */}
            <CardGrid onCardClick={handleCardClick} />
            
            <RestaurantDetailModal
                restaurant={selectedRestaurant}
                show={showDetailModal}
                onClose={() => setShowDetailModal(false)}
            />
        </div>
    );
}