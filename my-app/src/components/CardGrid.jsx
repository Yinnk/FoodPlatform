import React, { useState, useEffect } from 'react';
import { RestaurantCard } from './RestaurantCard.jsx';
import { restaurants as allRestaurants } from '../data/Restaurant.js';
import { FilterOptions } from './FilterOptions.jsx';

export function CardGrid({ onCardClick }) {
    const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);

    useEffect(() => {
        setFilteredRestaurants(allRestaurants); // Initialize with all restaurants
    }, []);

    return (
        <div className="container mt-4">
            <FilterOptions setFilteredRestaurants={setFilteredRestaurants} allRestaurants={allRestaurants} />
            <div className="row g-4 m-3">
                {filteredRestaurants.map((restaurant, index) => (
                    <div key={index} className="col-12 col-md-6 mb-4">
                        <RestaurantCard restaurant={restaurant} onClick={() => onCardClick(restaurant)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

