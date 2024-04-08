import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './globalStyles.css'; // Import global styles

const AdminLogin = () => {
  const navigate = useNavigate(); // Get navigate function

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('admin'); // Set default username
  const [password, setPassword] = useState('admin1234'); // Set default password

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoBack = () => {
    navigate(-1); // Go back when the button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (username === 'admin' && password === 'admin1234') {
      // If username and password match, navigate to admin panel
      navigate('/admin-panel');
    } else {
      // If username and password don't match, show error or handle accordingly
      alert('Invalid username or password');
    }
  };

  return (
    <div className="form-container"> {/* Apply global style */}
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><FontAwesomeIcon icon={faUser} /> Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group password-input-container"> {/* Apply global style */}
          <label><FontAwesomeIcon icon={faLock} /> Password</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            onClick={togglePasswordVisibility}
            className="password-toggle-icon"
          />
        </div>
        <div className="button-group">
          <button type="submit">Login</button>
          <button type="button" onClick={handleGoBack}>Back</button> {/* Add back button */}
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
