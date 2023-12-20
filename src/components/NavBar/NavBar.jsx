import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";
import * as usersService from "../../utilities/users-service";
import SettingsMenu from './SettingsMenu';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id='' className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="user-info">
        <span>Welcome, {user.name}</span>
      </div>
      <div className="menu-icon" onClick={openMenu}>
        ☰
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/change-name" onClick={closeMenu}>
              Change Name
            </Link>
          </li>
          <li>
            <Link to="/change-password" onClick={closeMenu}>
              Change Password
            </Link>
          </li>
          <li>
            <Link to="/delete-account" onClick={closeMenu}>
              Delete Account
            </Link>
          </li>
          <li>
            <Link to="" onClick={handleLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
        <div className="close-button" onClick={closeMenu}>
          Close Menu
        </div>
      </div>
    </nav>
  );
}