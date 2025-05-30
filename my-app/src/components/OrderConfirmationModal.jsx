import React from 'react';
import cartIcon from '../assets/img/cart.png';
import "./order-confirmation-modal.css";
import { useNavigate } from 'react-router-dom'; 

export function OrderConfirmationModal({ order, show, onClose }) {
    if (!show) return null;
    const navigate = useNavigate();

    const handleGoOrder = () => {
        navigate('/orderpage'); // navigate to the order page
      }

    
    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm" role="document">
                <div className="modal-content shadow-lg ">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {order ? (
                            <>
                                <img src={cartIcon} alt="cart icon" className="cart-icon"></img>
                                <p className="confirmation-text">Order has been confirmed for a surprise box from {order.restaurant} for pick up on {order.pickUpTime}. Thank you!</p>
                            </>
                        ) : (
                            <p>No order details available.</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn  btn-primary btn-view-order mx-auto d-block" onClick={handleGoOrder}>View Order</button>
                        <button type="button" className="btn btn-primary btn-view-order mx-auto d-block" onClick={onClose}>View All Restaurant</button>

                    </div>
                </div>
            </div>
        </div>
    );
}