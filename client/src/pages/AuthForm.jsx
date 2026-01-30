import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    phoneNo: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", signupData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", loginData);
  };

  const handleForgotPassword = () => {
    console.log("Redirect to forgot password for:", loginData.email);
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      {/* Signup Form */}
      <div className="signup">
        <form onSubmit={handleSignupSubmit}>
          <label className="main-label" htmlFor="chk" aria-hidden="true">
            Sign up
          </label>

          <div className="input-group">
            <div className="field-row">
              <label className="field-label">Username :</label>
              <input
                type="text"
                placeholder="name"
                required
                onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
              />
            </div>

            <div className="field-row">
              <label className="field-label">Email :</label>
              <input
                type="email"
                placeholder="email"
                required
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              />
            </div>

            <div className="field-row">
              <label className="field-label">Phone :</label>
              <input
                type="number"
                placeholder="phone no."
                required
                onChange={(e) => setSignupData({ ...signupData, phoneNo: e.target.value })}
              />
            </div>

            <div className="field-row">
              <label className="field-label">Password :</label>
              <input
                type="password"
                placeholder="password"
                required
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              />
            </div>
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>

      {/* Login Form */}
      <div className="login">
        <form onSubmit={handleLoginSubmit}>
          <label className="main-label" htmlFor="chk" aria-hidden="true">
            Login
          </label>

          <div className="input-group">
            <div className="field-row">
              <label className="field-label">Email :</label>
              <input
                className='login-field'
                type="email"
                placeholder="email"
                required
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>

            <div className="field-row">
              <label className="field-label">Password :</label>
              <input
                className='login-field'
                type="password"
                placeholder="password"
                required
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            
            <div className="forgot-password-container">
              <span className="forgot-password" onClick={handleForgotPassword}>
                Forgot Password?
              </span>
            </div>
          </div>

          <button type="submit">Login</button>

          {/* New Sign Up Option */}
          <div className="switch-form">
            Don't have an account? 
            <label htmlFor="chk" className="signup-link">  Sign up</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;