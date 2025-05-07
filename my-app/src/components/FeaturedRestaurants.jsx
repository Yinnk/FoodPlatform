import React from 'react';

const FeaturedRestaurants = () => {
  return (
    <section className="featured py-8">
      <h2 className="text-5xl font-semibold mb-4">Featured Restaurants</h2>
      <div className="restaurant-cards grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-white rounded-xl shadow-md p-4">
          <img src="/imgs/poke.webp" alt="Meal 1" className="w-full h-40 object-cover rounded-md mb-2" />
          <h3 className="font-bold">Go Poke Mystery Box "Catch of the Day"</h3>
          <p>Grilled salmon bowl with rice and greens.</p>
          <span className="price text-green-600 font-semibold">$6</span>
        </div>
        <div className="card bg-white rounded-xl shadow-md p-4">
          <img src="/imgs/kitanda.jpeg" alt="Meal 2" className="w-full h-40 object-cover rounded-md mb-2" />
          <h3 className="font-bold">Kitanda "Brazilian Chill Bites"</h3>
          <p>Mini slider trio with fries and aioli.</p>
          <span className="price text-green-600 font-semibold">$7</span>
        </div>
        <div className="card bg-white rounded-xl shadow-md p-4">
          <img src="/imgs/thai.jpg" alt="Meal 3" className="w-full h-40 object-cover rounded-md mb-2" />
          <h3 className="font-bold">BaiTong "Thai Taste Adventure"</h3>
          <p>Thai noodles with veggies and chicken.</p>
          <span className="price text-green-600 font-semibold">$8</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
