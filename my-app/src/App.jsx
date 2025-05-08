import { useState } from 'react'
import './App.css'
import { SignInPage } from './pages/SignInPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage.jsx';
import { RestaurantCard } from './components/RestaurantCard.jsx';
import { CardGrid } from './components/CardGrid.jsx';
import  {RestaurantPage} from './pages/RestaurantPage.jsx';


function App() {


   return (
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/signin" element={<SignInPage />} /> 
       <Route path="/card" element={<CardGrid />} />  
       <Route path="/restaurantpage" element={<RestaurantPage />} />   
        <Route path="/orderpage" element={<h1>Order Page</h1>} />{/* place holder for order page */}
       </Routes>
     </BrowserRouter>
   );
 }

export default App;
