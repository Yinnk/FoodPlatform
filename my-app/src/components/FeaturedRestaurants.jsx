import React from 'react';

const FeaturedRestaurants = () => {
  return (
    <section className="featured py-8">
      <h1 className="text-2xl font-bold mb-3 text-center">Featured Restaurants</h1>
      <div className="restaurant-cards grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-white rounded-xl shadow-md p-4">
          <img src="/imgs/poke.webp" alt="Meal 1" className="w-full h-40 object-cover rounded-md mb-2" />
          <h3 className="font-bold">Go Poke Mystery Box "Catch of the Day"</h3>
          <p>Don’t know what you’ll get, but you’ll love it! GoPoké’s “Catch of the Day” box is packed with surprise poke picks and tasty sides straight from the chef’s selection.</p>
          <span className="price text-green-600 font-semibold">$6</span>
        </div>
        <div className="card bg-white rounded-xl shadow-md p-4">
          <img src="/imgs/kitanda.jpeg" alt="Meal 2" className="w-full h-40 object-cover rounded-md mb-2" />
          <h3 className="font-bold">Kitanda "Brazilian Chill Bites"</h3>
          <p>Don’t know what you’ll get, but you’ll love it! Kitanda’s “Brazilian Chill Pack” delivers a random combo of sweet açaí, refreshing drinks, and cozy bites that hit the spot.</p>
          <span className="price text-green-600 font-semibold">$7</span>
        </div>
        <div className="card bg-white rounded-xl shadow-md p-4">
          <img src="/imgs/thai.jpg" alt="Meal 3" className="w-full h-40 object-cover rounded-md mb-2" />
          <h3 className="font-bold">BaiTong "Thai Taste Adventure"</h3>
          <p>Don’t know what you’ll get, but you’ll love it! Bai Tong’s “Thai Taste Adventure” box serves up surprise flavors with a bold mix of mini Thai dishes, drinks, and desserts.</p>
          <span className="price text-green-600 font-semibold">$8</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
