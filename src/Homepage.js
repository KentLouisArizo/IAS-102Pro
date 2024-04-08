import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link to="/user-login"><button>User Login</button></Link>
      <Link to="/admin-login"><button>Admin Login</button></Link>
    </div>
  );
};

export default Homepage;