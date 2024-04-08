import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import AdminMessagePage from './AdminMessagePage';
import AdminPanel from './AdminPanel';
import UserRegistrationPage from './UserRegistrationPage'; // Import UserRegistrationPage
import UserChangePassword from './UserChangePassword';
import UserDashboard from './UserDashboard';
import './globalStyles.css'; // Import global CSS file

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-message" element={<AdminMessagePage />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/user-registration" element={<UserRegistrationPage />} />
          <Route path="/change-password" element={<UserChangePassword/>} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;