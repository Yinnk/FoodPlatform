import React, { useState } from 'react';
import "./order-confirmation-modal.css";
import checkIcon from '../assets/img/check.png';
import warningIcon from '../assets/img/warning.png';

export function CancelModal({ order, show, onClose, onConfirm }) {
    const [confirmed, setConfirmed] = useState(false);

    if (!show) return null;

    const handleConfirm = () => {
        setConfirmed(true);       // Show success message
        onConfirm();              // Notify parent to cancel the order
        setTimeout(() => {
            setConfirmed(false);  // Reset
            onClose();            // Close modal after showing success
        }, 1800);
    };
          
    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm" role="document">
                <div className="modal-content shadow-lg">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={() => {
                            setConfirmed(false);
                            onClose();
                        }}></button>
                    </div>

                    <div className="modal-body text-center">
                        {!confirmed ? (
                            <>  
                                <img src={warningIcon} alt="warning icon" className="cart-icon" />
                                <p className="confirmation-text">
                                    Are you sure you want to cancel your order from <strong>{order?.name}</strong>?
                                </p>
                                <div className="d-flex justify-content-center gap-3 mt-3">
                                    <button className="btn btn-secondary" onClick={onClose}>No</button>
                                    <button className="btn btn-danger" onClick={handleConfirm}>Yes, Cancel</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <img src={checkIcon} alt="check icon" className="cart-icon" />
                                <p className="confirmation-text mt-3">Your order has been successfully canceled.</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
