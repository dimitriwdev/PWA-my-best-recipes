import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Navigation.css';
import useMediaQuery from '../useMediaQuery/useMediaQuery';
import logo from '../../assets/logo.png';

const Navigation = () => {
  let navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  let isPageSmall = useMediaQuery('(max-width: 650px)');

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="navigation">
      <div className="navigationHeader" onClick={() => navigate(`/`)}>
        <img src={logo} alt="logo" />
        <h1>My best recipe</h1>
      </div>
      {!isPageSmall ? (
        <ul className="navigationLinks">
          <NavLink
            to="/"
            className={({ isActive }) =>
              'navigationLink' + (isActive ? ' activeClassName' : '')
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              'navigationLink' + (isActive ? ' activeClassName' : '')
            }
          >
            <li>Categories</li>
          </NavLink>
          <NavLink
            to="/random-recipe"
            className={({ isActive }) =>
              'navigationLink' + (isActive ? ' activeClassName' : '')
            }
          >
            <li>Random recipe</li>
          </NavLink>
        </ul>
      ) : (
        <div>
          <MenuIcon className="muiIcon" onClick={handleToggleMenu} />
          {toggleMenu ? (
            <div className="mobileNavigationContainer">
              <div className="mobileNavigationHeader">
                <div
                  className="navigationHeader"
                  onClick={(() => navigate(`/`), handleToggleMenu)}
                >
                  <img src={logo} alt="logo" />
                  <h1>My best recipe</h1>
                </div>
                <CloseIcon className="muiIcon" onClick={handleToggleMenu} />
              </div>
              <div className="navigationMobileList">
                <ul className="navigationMobileLinks">
                  <Link
                    to="/"
                    activeStyle={{ color: 'orange' }}
                    onClick={handleToggleMenu}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/categories"
                    activeStyle={{ color: 'orange' }}
                    onClick={handleToggleMenu}
                  >
                    <li>Categories</li>
                  </Link>
                  <Link
                    to="/random-recipe"
                    activeStyle={{ color: 'orange' }}
                    onClick={handleToggleMenu}
                  >
                    <li>Random recipe</li>
                  </Link>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Navigation;
