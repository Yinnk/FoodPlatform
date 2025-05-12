import React from 'react';
import './restaurant-modal.css';
import locationIcon from '../assets/img/location.png';
import glutenfreeIcon from '../assets/img/glutenfree.png';
import veganIcon from '../assets/img/vegan.png';
import halalIcon from '../assets/img/halal-sign.png';
import nutfreeIcon from '../assets/img/walnut.png';
import foodSurplusIconOrange from '../assets/img/yellow-star.png';
import foodSurplusIconGreen from '../assets/img/green-star.png';
import foodSurplusIconRed from '../assets/img/red-star.png';
import clock from '../assets/img/clock.png';


export function RestaurantDetailModal({ restaurant, show, onClose, onOrder }) {

    if (!show) return null;

    const foodSurplusIconMap = {
        High: foodSurplusIconRed,
        Medium: foodSurplusIconOrange,
        Low: foodSurplusIconGreen,
    };


    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable shadow-sm" role="document">
                <div className="modal-content shadow-lg ">
                    <div className="modal-header">
                        <h5 className="modal-title">Restaurant Details</h5> {/* adding this header for close button. if over a dark img, close button can't show to show.  */}
                        <button type="button" className="btn-close" odata-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">

                        {restaurant ? (
                            <>
                                <img
                                    src={restaurant.image || "https://via.placeholder.com/150"}
                                    className="modal-img"
                                    alt={restaurant.name}
                                />
                                <hr className="card-divider mb-3" />
                                <h2>{restaurant.name}</h2>
                                <h3>{restaurant.type}</h3>
                                <p>{restaurant.description}</p>

                                <div className="list-group">

                                    <div className="list-group-item d-flex align-items-center">
                                        <img src={foodSurplusIconMap[restaurant.foodSurplus] } alt={`Surplus ${restaurant.foodSurplus}`} className="icon" />
                                        {restaurant.foodSurplus}
                                    </div>

                                    <div className="list-group-item d-flex align-items-center">
                                        <img src={veganIcon} alt="vegan" className="icon" />
                                        {restaurant.vegan}
                                    </div>

                                   

                                    <div className="list-group-item d-flex align-items-center">
                                        <img src={glutenfreeIcon} alt="gluten-free" className="icon" />
                                        {restaurant.glutenFree}
                                    </div>

                                    
                                    <div className="list-group-item d-flex align-items-center">
                                        <img src={halalIcon} alt="halal" className="icon" />
                                        {restaurant.halal}
                                    </div>

                                    <div className="list-group-item d-flex align-items-center">
                                        <img src={nutfreeIcon} alt="nut-free" className="icon" />
                                        {restaurant.nutFree}
                                    </div>

                                    <div className="list-group-item d-flex align-items-center">
                                        <img src={locationIcon} alt="location" className="icon" />
                                        {restaurant.location}
                                    </div>

                                    <div className="list-group-item d-flex align-items-center">
                                        <img src={clock} alt="clock icon" className="icon" />
                                        {restaurant.pickUpTime}
                                    </div>

                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>

                    <div className="modal-footer">

                        <button className="btn btn-order btn-primary" onClick={() => onOrder(restaurant)}>ORDER NOW</button> {/* This button should trigger order confirmation modal. right now it's a placeholder */}

                    </div>

                </div>
            </div>
        </div>
    );

}

