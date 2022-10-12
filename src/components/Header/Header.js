import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="nav-section">
      <h1>Quiz Ultra</h1>
      <nav className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Header;
