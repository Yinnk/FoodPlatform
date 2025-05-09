import React from 'react';
import './restaurant-hero.css'
import { useNavigate } from 'react-router-dom'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

 useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  });

  const handleExploreClick = () => {
    if (isSignedIn) {
      navigate('/restaurantpage');
    } else {
      navigate('/signin');
    }
  }



  return (
    <section className="hero flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-green-50">
      <div className="hero-content md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 leading-tight">
          Eat Well.<br />Save Money.<br />Reduce Waste.
        </h1>
        <p className="text-gray-700 mb-6">
          Discover and reserve surplus meals from local Seattle restaurants—fresh, affordable, and eco-friendly.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition" onClick={handleExploreClick}>
          Explore Now
        </button>
      </div>
      <div className="hero-image md:w-1/2">
        <img src="/imgs/veggies.jpg" alt="Fresh Vegetables" className="rounded-xl shadow-lg w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
