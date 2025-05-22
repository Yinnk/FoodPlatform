import React from 'react';
import "./order-confirmation-modal.css";
import warningIcon from '../assets/img/warning.png';

export function OrderConfirmationCancelModal({ order, show, onClose, onConfirm, onCancel }) {

    if (!show) return null
      
    return (
        <>
            <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm" role="document">
                    <div className="modal-content shadow-lg ">
                        <div className="modal-header">
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            {order ? (
                                <>
                                    <img src={warningIcon} alt="cart icon" className="warning-icon" />
                                    <p className="confirmation-text">
                                        Are you sure you want to order a surprise box from {order.name} for pick up on {order.pickUpTime}?
                                    </p>
                                </>
                            ) : (
                                <p>No order details available.</p>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success btn-view-order mx-auto d-block" onClick={onConfirm}>Confirm</button>
                            <button type="button" className="btn btn-danger btn-view-order mx-auto d-block" onClick={onCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
