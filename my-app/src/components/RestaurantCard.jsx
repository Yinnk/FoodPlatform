import { useNavigate } from 'react-router-dom'; //import the useNavigate hook
import React, { useState } from 'react';

export function RestaurantCard ({restaurant}) {
    return (
        <div className="card h-100" >
            <img src={restaurant.image || "https://via.placeholder.com/150"} className="card-img-top" alt={restaurant.name} />
            <div className="card-body">
                <h5>{restaurant.name}</h5>
                <h6 className="card-text">{restaurant.type}</h6>
                <p> ${restaurant.price}</p>
            </div>
        </div>
    );

}
