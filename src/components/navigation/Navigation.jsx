import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  let navigate = useNavigate();
  return (
    <div className="navigation">
      <div className="navigationHeader">
        <h1 onClick={() => navigate(`/`)}>My best recipe</h1>
      </div>
      <ul className="navigationLinks">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/categories">
          <li>Categories</li>
        </Link>
        <Link to="/random-recipe">
          <li>Random recipe</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
