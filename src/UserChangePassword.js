import React, { useState } from 'react';
import { auth } from './firebase'; // Import auth from Firebase

const UserChangePassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'newPassword') setNewPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send password reset email
      const user = auth.currentUser;
      if (user) {
        try {
          await user.updatePassword(newPassword);
          setSuccessMessage('Password updated successfully.');
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError('No user signed in.');
      }
      setSuccessMessage('Password updated successfully.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" name="newPassword" value={newPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Change Password</button>
      </form>
      {error && <div>{error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default UserChangePassword;
