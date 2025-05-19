import React, { useState } from 'react';
import './restaurant-card.css';
import { useNavigate } from 'react-router-dom';

export function OrderCard ({restaurant}) {

    const navigate = useNavigate();
    const handleViewRestaurant =()=>{
        navigate('/restaurantpage', { state: { restaurant } });
    }; //for 'view restaurant' button to go to restaurant page

    return (
        <div className="restaurant-page-card h-100"  >

            <img src={restaurant.image || "https://via.placeholder.com/150"} className="card-img-top restaurantcard-img size-fluid" alt={restaurant.name} />
            <hr className="restaurantcard-divider"/>
            <div className="card-body">
                <h5 className="restaurant-name mx-2 ">{restaurant.name}</h5>
                <h6 className="card-text mx-2">{restaurant.type}</h6>
            </div>
            <div className="card-body">
            
                                    {restaurant.pickedUp ? (
                                        <>
                                        <div className="list-group">
                                            <div className="list-group-item d-flex align-items-center">STATUS: Picked Up</div>
                                            <div className="list-group-item d-flex align-items-center">ORDER TOTAL: ${restaurant.price}</div>
                                        </div>
                                        <div className="modal-footer d-flex justify-content-center">
                                            <button className="btn btn-order btn-primary m-3" onClick={() => handleViewRestaurant(restaurant)}>VIEW RESTAURANT</button> 
                
                                        </div>

                                        </>
                                    ) : (
                                        <>
                                                <div className="list-group">
                                                    <div className="list-group-item d-flex align-items-center">STATUS: Orderd </div>
                                                    <div className="list-group-item d-flex align-items-center">PICKUP TIME: {restaurant.pickUpTime} </div>
                                                    <div className="list-group-item d-flex align-items-center"> DIETARY NOTES: {restaurant.glutenFree}, {restaurant.vegan}, {restaurant.halal}, {restaurant.nutFree}</div>
                                                    <div className="list-group-item d-flex align-items-center"> LOCATION: {restaurant.location} </div>
                                                    <div className="list-group-item d-flex align-items-center">ORDER TOTAL: ${restaurant.price} </div>
                                                </div>
                                        
                                        <div className="modal-footer d-flex justify-content-center">
            
                                            <button className="btn btn-order btn-danger m-3" onClick={() => onOrder(restaurant)}>CANCEL</button> 
                                                
                                        </div>
                                    
                                    </>
                                    )}
                                </div>
                                </div>

    );

}

