import React from "react";


import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedRestaurants from './FeaturedRestaurants';
import AboutUs from './AboutUs';
import Mission from './Mission';
import Partners from './Partners';
import Footer from './Footer';

export function HomePage(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedRestaurants />
      <Mission />
      <AboutUs />
      <Partners />
      <Footer />
    </div>
  );
};

