import React from 'react';
import { Link } from 'react-router-dom';
import './success.css'; // Import the CSS file for custom styling

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          <i className="fa fa-check-circle" aria-hidden="true"></i>
        </div>
        <h1>Payment Successful</h1>
        <p>Your payment has been successfully processed. Thank you for your purchase!</p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default Success;
