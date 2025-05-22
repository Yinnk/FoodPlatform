// src/pages/MapPage.jsx
import React from 'react';
import Map from '../components/Map';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import MapHero from '../components/MapHero';

export function MapPage() {
  return (
    <div>
        <header>
        <Navbar />
        <MapHero />
        </header>
     
      <Map />

      <footer>
      <Footer />
      </footer>

    </div>
  );
}
