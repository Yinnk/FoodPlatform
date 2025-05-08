import { useNavigate } from 'react-router-dom'; 
import React, { useState } from 'react';
import './restaurant-card.css';

export function RestaurantCard ({restaurant, onClick}) {

    return (
        <div className="restaurant-page-card h-100" onClick={() => {
            onClick();
          }} >
            <img src={restaurant.image || "https://via.placeholder.com/150"} className="card-img-top restaurantcard-img size-fluid" alt={restaurant.name} />
            <hr className="restaurantcard-divider"/>
            <div className="card-body">
                <h5 className="restaurant-name">{restaurant.name}</h5>
                <h6 className="card-text">{restaurant.type}</h6>
                <p className="text-end pe-3"> ${restaurant.price}</p>
            </div>
        </div>
    );


}

