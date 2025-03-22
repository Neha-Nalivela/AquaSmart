import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Button } from 'react-bootstrap';
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">AQUASMART</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          {user ? (
            <>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <Button onClick={handleLogout} className="btn btn-danger ms-2">Logout</Button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
