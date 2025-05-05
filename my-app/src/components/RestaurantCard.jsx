import { useNavigate } from 'react-router-dom'; //import the useNavigate hook
import React, { useState } from 'react';
import './RestaurantCard.css'; //import the css file

export function RestaurantCard ({restaurant, onClick}) {
    console.log("Card rendered:", restaurant.name);
    return (
        <div className="card h-100" onClick={() => {
            console.log("Card clicked:", restaurant.name);
            onClick();
          }} >
            <img src={restaurant.image || "https://via.placeholder.com/150"} className="card-img-top size-fluid" alt={restaurant.name} />
            <hr className="card-divider"/>
            <div className="card-body">
                <h5>{restaurant.name}</h5>
                <h6 className="card-text">{restaurant.type}</h6>
                <p className="text-end"> ${restaurant.price}</p>
            </div>
        </div>
    );

}