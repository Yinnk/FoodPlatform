import React from 'react';
import './featured-restaurants.css';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '../data/Restaurant.js';

const FeaturedRestaurants = () => {
  const navigate = useNavigate();

  const featuredRestaurantNames = [
    'Go Poke',
    'Kitanda Espresso & Açaí',
    'Bai Tong Restaurant'
  ];

  const featuredData = restaurants.filter(r => featuredRestaurantNames.includes(r.name));

  const handleViewMore = (restaurant) => {
    navigate('/restaurantpage', { state: { restaurant } });
  };

  return (
    <section className="featured py-8">
      <h1 className="text-2xl font-bold mb-3 text-center">Featured Restaurants</h1>
      <div className="feature-restaurant-cards grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredData.map((restaurant) => (
          <div key={restaurant.name} className="card bg-white rounded-xl shadow-md p-4">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="font-bold">{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <span className="price text-green-600 font-semibold">${restaurant.price}</span>
            <button
              onClick={() => handleViewMore(restaurant)}
              className="mt-3 btn btn-primary w-full"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
