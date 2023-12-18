import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";
// import logout
import * as usersService from "../../utilities/users-service";
import SettingsMenu from './SettingsMenu';

// render user's name in Nav Bar - 2. pass user prop and destructure NavBar function
// for logout - destructure NavBar and pass setUser
export default function NavBar({ user, setUser }) {
  // logout function
  function handleLogOut() {
    // delegate to the users-service
    usersService.logOut();
    // update state, this causes a re-render
    setUser(null);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSettingsMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <nav>
      {/* render user's name in Nav Bar - 3. render the user */}
      <span>Welcome, {user.name}</span>
      {/* logout link - onClick prop and event handler */}
      
      &nbsp;&nbsp;
      <div className="menu-icon" onClick={openMenu}>
        ☰
      </div>
      {isMenuOpen && (
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
        </div>
      )}
    </nav>
  );
}
