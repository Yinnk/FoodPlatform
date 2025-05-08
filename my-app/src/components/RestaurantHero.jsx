import React from 'react';
import './restaurant-hero.css'; 

const RestaurantHero = () => {
  return (
    <section className="restaurant-hero">
      <div className="restaurant-hero-content">
        <h1>Discover Local Flavors,<br />One Surprise At A Time</h1>
        <h2>AFFORDABLE MEALS. LOCAL SUPPORT. LESS WASTE.</h2>
        <p>
          Explore surprise meal boxes from Seattle’s favorite local restaurants—
          all at discounted prices. Our mission is to make good food more accessible to 
          low-income communities while tackling food waste at its source. 
          Whether you’re looking for a hidden gem or a familiar favorite, 
          there’s something here for everyone.
        </p>
      </div>
    </section>
  );
};

export default RestaurantHero;
