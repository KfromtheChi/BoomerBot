import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";
import * as usersService from "../../utilities/users-service";
import SettingsMenu from './SettingsMenu';
import ChatLogs from './ChatLogsPage';

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
<<<<<<< HEAD
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link to="/chat-logs">Chat Log</Link>
            </li>
            <li onClick={openSettingsMenu}>
              {isMenuOpen && <SettingsMenu />}
            </li>
            <li>
              <Link to="" onClick={handleLogOut}>
                Log Out
              </Link>
            </li>
          </ul>
=======
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
>>>>>>> 840f75d0f96611ea7c9e3b941c2795a4ffa9b670
        </div>
      </div>
    </nav>
  );
}
