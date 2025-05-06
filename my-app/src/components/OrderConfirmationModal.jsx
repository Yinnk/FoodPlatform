import React from 'react';
import cartIcon from '../assets/img/cart.png';
import "./order-confirmation-modal.css";
import { useNavigate } from 'react-router-dom'; //import the useNavigate hook

export function OrderConfirmationModal({ order, show, onClose }) {
    if (!show) return null;
    const navigate = useNavigate();

    const handleGoOrder = () => {
        navigate('/orderpage'); // navigate to the order page
      }
    
    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable shadow-sm" role="document">
                <div className="modal-content ">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {order ? (
                            <>
                                <img src={cartIcon} alt="cart icon"></img>
                                <p>Order has been confirmed for a surprise box from {order.restaurant} for pick up on {order.pickUpTime}. Thank you!</p>
                            </>
                        ) : (
                            <p>No order details available.</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleGoOrder}>View Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}