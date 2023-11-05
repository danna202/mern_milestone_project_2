import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // needs more info for how we are doing auth... benjamin i think you had some code for here?
    // if not we can workshop sunday
    if (userName === 'usernamefictional' && password === 'password') {
  
   redirect('/userinfo');
} else {
  alert('Sign-in failed. Please check your username and password.');
}
};
  
  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      {isAuthenticated ? (
    <div>
      <p>You are signed in!</p>
    </div>
    ) : (
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
        )}
    </div>
  );
}

export default SignIn;