import React from 'react';
import { Link } from 'react-router-dom';
import './cancel.css'; // Import the CSS file for custom styling

const Cancel = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-card">
        <div className="cancel-icon">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <h1>Payment Cancelled</h1>
        <p>Your payment process has been cancelled. If you have any questions or need assistance, please contact our support team.</p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default Cancel;
