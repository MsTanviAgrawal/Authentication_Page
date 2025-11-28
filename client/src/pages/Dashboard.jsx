import React, { useEffect, useState } from 'react';
import api, { setAuthToken } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

     const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { navigate('/login'); return; }
    setAuthToken(token);

    (async () => {
      try {
        const res = await api.get('/api/auth/me');
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token');
        navigate('/login');
      }
    })();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    navigate('/login');
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Welcome{user ? `, ${user.name}` : ''}!</h2>
        <button onClick={logout}>Logout</button>
      </header>
      <main>
        <p>This is a protected dashboard. Your email: {user?.email}</p>
      </main>
    </div>
  )
}

export default Dashboard
