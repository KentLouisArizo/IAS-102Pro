import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword function
import { auth } from './firebase'; // Import auth from Firebase
import './globalStyles.css';

const UserLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Sign in with email and password
      navigate('/user-dashboard'); // Navigate to User Dashboard after successful login
    } catch (error) {
      setError(error.message); // Handle login error
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}> {/* Use onSubmit event for form submission */}
        <div className="form-group">
          <label><FontAwesomeIcon icon={faEnvelope} /> Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group password-input-container">
          <label><FontAwesomeIcon icon={faLock} /> Password</label>
          <div className="password-input-wrapper">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            />
          </div>
        </div>
        {error && <div className="error-message">{error}</div>} {/* Display login error */}
        <button type="submit">Login</button>
        <Link to="/admin-message" className="link">Message Admin</Link>
        <button onClick={() => navigate('/')} type="button">Back</button>
      </form>
    </div>
  );
};

export default UserLogin;