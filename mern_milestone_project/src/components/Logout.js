import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
  return (
    <div className="logout">
      <h2>Logout</h2>
      <p>You are signed out.</p>
      <Link to="/signin">Sign In</Link>
    </div>
  );
}

export default Logout;