import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../favicon-32x32.png';

export default function Navbar() {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} alt="logo" width="32" height="32" />
        <Link className="navbar-brand" to="/" style={logoStyle}>NoteVault</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? (
            <form className="d-flex me-auto" role="search">
              <Link className="btn btn-light-pink mx-1" to="/login" role="button">Login</Link>
              <Link className="btn btn-light-pink mx-1" to="/signup" role="button">Signup</Link>
            </form>
          ) : (
            <button onClick={handleLogout} className="btn btn-light-pink me-auto">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

const logoStyle = {
  fontFamily: "'Pacifico', cursive", // Aesthetic font
  textShadow: "2px 2px 4px #FF00FF", // Shine effect
};