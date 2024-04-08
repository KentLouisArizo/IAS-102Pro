import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './globalStyles.css'; // Import global styles

const AdminPanel = () => {
  return (
    <div className="admin-panel-container"> {/* Container for admin panel */}
      <h2>Admin Panel</h2>
      <div className="admin-buttons-container"> {/* Container for admin buttons */}
        <Link to="/user-registration" className="admin-button">User Registration</Link> {/* User registration button */}
        <Link to="/change-password" className="admin-button">User Change Password</Link> {/* Change password button */}
      </div>
    </div>
  );
};

export default AdminPanel;