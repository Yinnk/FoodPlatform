// src/pages/MapPage.jsx
import React from 'react';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapHero from '../components/MapHero';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../index.js';
import SignInAlert from '../components/SignInAlert.jsx';

export function MapPage() {

  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setShowPopup(true);
      } else {
        setUser(currentUser);
      }
    });
    return () => unsub();
  }, []);

  if (showPopup) {
    return (
      <SignInAlert />
    );
  }

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
