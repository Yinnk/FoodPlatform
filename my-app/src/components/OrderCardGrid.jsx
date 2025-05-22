import React, { useState, useEffect } from 'react';
import { OrderHistory } from '../data/OrderHistory.js';
import { OrderCard } from './OrderCard.jsx';
import { RestaurantDetailModal } from './RestaurantModal.jsx';
import { CancelModal } from './CancelModal.jsx';

export function OrderCardGrid() {
  const [orders, setOrders] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];

    const formattedStored = storedOrders.map(order => ({
      ...order,
      id: `local-${order.id}`
    }));

    const historyOrders = OrderHistory.map(order => ({
      ...order,
      id: `history-${order.id}`
    }));

    const combined = [...formattedStored, ...historyOrders];

    // No need to sort for grouping, we'll split into sections
    setOrders(combined);
  }, []);

  const handleViewRestaurant = (restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    const handleCloseModal = () => {
        setSelectedRestaurant(null);
    };

    const handleCancelClick = (order) => {
        setSelectedOrder(order);
        setShowCancelModal(true);
    };

  const handleCancelConfirmed = () => {
    setTimeout(() => {
      const updatedOrders = orders.map(order =>
        order.id === selectedOrder.id
          ? { ...order, pickedUp: 'canceled' }
          : order
      );

      setOrders(updatedOrders);

      const ordersToStore = updatedOrders.filter(
        order => order.pickedUp !== true
      );

      localStorage.setItem('orders', JSON.stringify(ordersToStore));
      setSelectedOrder(null);
    }, 1500);
  };

  // Group orders by status
  const activeOrders = orders.filter(order => order.pickedUp !== true && order.pickedUp !== 'canceled');
  const pickedUpOrders = orders.filter(order => order.pickedUp === true);
  const canceledOrders = orders.filter(order => order.pickedUp === 'canceled');

  const renderSection = (title, orderList) => (
    <div className="mb-5">
      <h4 className="mb-3">{title}</h4>
      <div className="row g-4">
        {orderList.map(order => (
          <div key={order.id} className="col-12 col-md-6">
            <OrderCard
              restaurant={order}
              onViewRestaurant={handleViewRestaurant}
              onCancel={() => handleCancelClick(order)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      {renderSection('Active Orders', activeOrders)}
      {renderSection('Picked Up Orders', pickedUpOrders)}
      {renderSection('Canceled Orders', canceledOrders)}

      {selectedRestaurant && (
        <RestaurantDetailModal
          restaurant={selectedRestaurant}
          onClose={handleCloseModal}
        />
      )}

      <CancelModal
        order={selectedOrder}
        show={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancelConfirmed}
      />
    </div>
  );
}
