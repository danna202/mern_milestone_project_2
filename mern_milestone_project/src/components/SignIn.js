import React, { useState } from 'react';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
        <form>
          <div>
            <label>Username:</label>
            <input
              type="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
    </div>
  );
}

export default SignIn;