import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

import './App.css'
import AuthForm from './pages/AuthForm.jsx';

function App() {
 const isAuthenticated = () => !!localStorage.getItem('token');

  return (
    <>
      <div>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={ isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={ isAuthenticated() ? <Dashboard /> : <Navigate to="/login" /> } />
      </Routes>
    </BrowserRouter> */}

    <AuthForm/>
      </div>
    </>
  )
}

export default App
