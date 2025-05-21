import React from 'react';
import './restaurant-card.css';
import { useNavigate } from 'react-router-dom';

export function OrderCard({ restaurant, onCancel }) {
    const navigate = useNavigate();

    const handleViewRestaurant = () => {
        navigate('/restaurantpage', { state: { restaurant } });
    };
      

    const renderStatusSection = () => {
        if (restaurant.pickedUp === true) {
            return (
                <>
                    <div className="list-group">
                        <div className="list-group-item d-flex align-items-center text-success fw-bold">
                            STATUS: Picked Up
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            ORDER TOTAL: ${restaurant.price}
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-order btn-primary m-3" onClick={handleViewRestaurant}>
                            VIEW RESTAURANT
                        </button>
                    </div>
                </>
            );
        } else if (restaurant.pickedUp === "canceled") {
            return (
                <>
                    <div className="list-group">
                        <div className="list-group-item d-flex align-items-center text-danger fw-bold">
                            STATUS: Canceled
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            ORDER TOTAL: ${restaurant.price}
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="list-group">
                        <div className="list-group-item d-flex align-items-center">
                            STATUS: Ordered
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            PICKUP TIME: {restaurant.pickUpTime}
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            DIETARY NOTES: {restaurant.glutenFree}, {restaurant.vegan}, {restaurant.halal}, {restaurant.nutFree}
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            LOCATION: {restaurant.location}
                        </div>
                        <div className="list-group-item d-flex align-items-center">
                            ORDER TOTAL: ${restaurant.price}
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-order btn-primary m-3" onClick={() => window.open('https://kingcounty.gov/en/dept/metro/travel-options/metro-flex', '_blank')}>
                            Pickup with MetroFlex
                        </button>
                        <button className="btn btn-order btn-danger m-3" onClick={() => onCancel(restaurant)}>
                            CANCEL
                        </button>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="restaurant-page-card h-100">
            <img
                src={restaurant.image || "https://via.placeholder.com/150"}
                className="card-img-top restaurantcard-img size-fluid"
                alt={restaurant.name}
            />
            <hr className="restaurantcard-divider" />
            <div className="card-body">
                <h5 className="restaurant-name mx-2">{restaurant.name}</h5>
                <h6 className="card-text mx-2">{restaurant.type}</h6>
            </div>
            <div className="card-body">{renderStatusSection()}</div>
        </div>
    );
}
