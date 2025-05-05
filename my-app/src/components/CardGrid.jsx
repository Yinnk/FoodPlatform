import { RestaurantCard } from './RestaurantCard.jsx';
import {restaurants} from '../data/Restaurant.js';
import React from 'react';

export function CardGrid() {
  console.log("restaurants", restaurants);

  return (
  <div className="container mt-4">
      <div className="row g-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
      );
}
