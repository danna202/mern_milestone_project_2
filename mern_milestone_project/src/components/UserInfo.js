import React from 'react';

function UserInfo({ user }) {
  return (
    <div className="profile">
      <h2>User Profile Information</h2>
      <div>
        <p>Name:</p> {user.name}
      </div>
      <div>
        <p>Email:</p> {user.email}
      </div>
      <div>
        <p>Username:</p> {user.username}
      </div>
      <div>
        <p>Location:</p> {user.location}
      </div>
    
    </div>
  );
}

export default UserInfo;