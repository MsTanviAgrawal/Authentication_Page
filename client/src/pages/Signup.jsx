import React, { useState } from 'react';
import api, { setAuthToken } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

     const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/api/auth/register', form);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
     <div className="auth-container">
      <h2>Create account</h2>
      {error && <div className="alert">{error}</div>}
      <form onSubmit={onSubmit} className="auth-form">
        <input name="name" placeholder="Name" value={form.name} onChange={onChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={onChange} type="email" required />
        <input name="password" placeholder="Password" value={form.password} onChange={onChange} type="password" required />
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup
