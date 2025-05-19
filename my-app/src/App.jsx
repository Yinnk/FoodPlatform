import { useState } from 'react'
import './App.css'
import { SignInPage } from './pages/SignInPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage.jsx';
import  {RestaurantPage} from './pages/RestaurantPage.jsx';

import { OrderCardGrid } from './components/OrderCardGrid.jsx';
import { OrderPage } from './pages/OrderPage.jsx';

function App() {


   return (
     <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/signin" element={<SignInPage />} /> 
       <Route path="/restaurantpage" element={<RestaurantPage />} />   
        <Route path="/ordercard" element={<OrderCardGrid />} />{/* place holder for order card */}
        <Route path="/orderpage" element={<OrderPage />} />{/* place holder for order card */}

       </Routes>
     </BrowserRouter>
   );
 }

export default App;
