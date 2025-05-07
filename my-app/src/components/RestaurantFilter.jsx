import React, { useState } from 'react';


// Restaurant data
const restaurants = [
  {
    name: "Spice Bridge",
    type: "Food Hall",
    price: 15,
    image: null,
    location: "14200 Tukwila International Blvd, Tukwila, WA",
    pickUpTime: "4:00 PM - 6:00 PM",
    foodSurplus: "High", 
    vegan: "Vegan",
    glutenFree: "Gluten-Free",
    halal: "Halal",
    nutFree: "Nut-Free"
  },
  {
    name: "Bai Tong Restaurant",
    type: "Thai",
    price: 18,
    image: null,
    location: "16876 Southcenter Parkway, Tukwila, WA",
    pickUpTime: "5:00 PM - 7:00 PM",
    foodSurplus: "Medium", 
    vegan: "Not Vegan",
    glutenFree: "Gluten-Free",
    halal: "Contains Non-Halal Items",
    nutFree: "Contains Nuts"
  },
  {
    name: "Old Saigon",
    type: "Vietnamese",
    price: 12,
    image: null,
    location: "971 Industry Drive, Tukwila, WA",
    pickUpTime: "3:30 PM - 5:30 PM",
    foodSurplus: "Low", 
    vegan: "Vegan",
    glutenFree: "Gluten-Free",
    halal: "Contains Non-Halal Items",
    nutFree: "Contains Nuts"
  }
];

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
