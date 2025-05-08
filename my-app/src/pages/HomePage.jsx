import React from "react";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedRestaurants from '../components/FeaturedRestaurants';
import AboutUs from '../components/AboutUs';
import Mission from '../components/Mission';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

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

