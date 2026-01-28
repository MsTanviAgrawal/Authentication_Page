import React, { useState } from 'react';
import api, { setAuthToken } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/api/auth/login', form);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
     <div className="auth-container">
      <h2>Login</h2>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={onSubmit} className="auth-form">
      
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} type="email" required />
        <input name="password" placeholder="Password" value={form.password} onChange={onChange} type="password" required />
        <button type="submit">Login</button>
      </form>
      <p>No account? <Link to="/signup">Sign up</Link></p>
    </div>
  )
}

export default Login
