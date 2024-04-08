import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'; // Import getAuth, createUserWithEmailAndPassword, and sendPasswordResetEmail
import { auth } from './firebase'; // Import auth from your Firebase initialization file
import './globalStyles.css';

const UserRegistrationPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    try {
      const auth = getAuth(); // Initialize the authentication service
      await createUserWithEmailAndPassword(auth, email, password); // Create user with email and password

      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      
      // Navigate to the admin panel
      navigate('/admin-panel');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} required />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Register</button>
        <Link to="/admin-panel">Back to Admin Panel</Link>
      </form>
    </div>
  );
};

export default UserRegistrationPage;
