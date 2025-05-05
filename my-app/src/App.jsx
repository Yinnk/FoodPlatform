import { useState } from 'react'
import './App.css'
import { MySignInScreen } from './components/UserAuth.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RestaurantCard } from './components/RestaurantCard.jsx';
import { CardGrid } from './components/CardGrid.jsx';

function App() {

 
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/signin" element={<MySignInScreen />} /> 
        <Route path="/card" element={<CardGrid />} />        
        </Routes>
      </BrowserRouter>
    );
  
}
export default App;
