import { useState } from 'react'
import './App.css'
import { MySignInScreen } from './components/UserAuth.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RestaurantCard } from './components/RestaurantCard.jsx';
import { CardGrid } from './components/CardGrid.jsx';
import  {RestaurantPage} from './pages/RestaurantPage.jsx';

function App() {

 
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/signin" element={<MySignInScreen />} /> 
        <Route path="/card" element={<CardGrid />} />   {/* should be removed after developing */}
        <Route path="/restaurantpage" element={<RestaurantPage />} />    
        <Route path="/orderpage" element={<h1>Order Page</h1>} />{/* place holder for order page */}
        </Routes>
      </BrowserRouter>
    );
  
}
export default App;
