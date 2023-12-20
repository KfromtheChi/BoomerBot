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

  const openSettingsMenu = () => {
    setIsMenuOpen(true);
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
          <li>Chat Log</li>
          <li onClick={openSettingsMenu}>
            {isMenuOpen && <SettingsMenu />}
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
