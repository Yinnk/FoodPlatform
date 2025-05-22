import React, { useState } from 'react';
import { restaurants } from '../data/Restaurant.js';


const RestaurantFilter = () => {
  // State to store the selected filter options
  const [filters, setFilters] = useState({
    vegan: false,
    glutenFree: false,
    halal: false,
    nutFree: false
  });

  // Function to handle filter changes
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked
    });
  };

  // Function to filter restaurants based on selected filters
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (filters.vegan && restaurant.vegan !== "Vegan") return false;
    if (filters.glutenFree && restaurant.glutenFree !== "Gluten-Free") return false;
    if (filters.halal && restaurant.halal !== "Halal") return false;
    if (filters.nutFree && restaurant.nutFree !== "Nut-Free") return false;
    return true;
  });

  return (
    <div className="restaurant-filter">
      <h1>Restaurant Filters</h1>
      
      {/* Filter Options */}
      <div className="filters">
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={filters.vegan}
            onChange={handleFilterChange}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            name="glutenFree"
            checked={filters.glutenFree}
            onChange={handleFilterChange}
          />
          Gluten-Free
        </label>
        <label>
          <input
            type="checkbox"
            name="halal"
            checked={filters.halal}
            onChange={handleFilterChange}
          />
          Halal
        </label>
        <label>
          <input
            type="checkbox"
            name="nutFree"
            checked={filters.nutFree}
            onChange={handleFilterChange}
          />
          Nut-Free
        </label>
      </div>
      
      {/* Displaying the filtered list of restaurants */}
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.type}</p>
            <p>{restaurant.location}</p>
            <p>Pickup Time: {restaurant.pickUpTime}</p>
            <p>Price: ${restaurant.price}</p>
            <p>Food Surplus: {restaurant.foodSurplus}</p>
            <ul>
              <li>Vegan: {restaurant.vegan}</li>
              <li>Gluten-Free: {restaurant.glutenFree}</li>
              <li>Halal: {restaurant.halal}</li>
              <li>Nut-Free: {restaurant.nutFree}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantFilter;
