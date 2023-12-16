import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";
// import logout
import * as usersService from "../../utilities/users-service";

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

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp;&nbsp;
      {/* render user's name in Nav Bar - 3. render the user */}
      <span>Welcome, {user.name}</span>
      {/* logout link - onClick prop and event handler */}
      &nbsp;&nbsp;{" "}
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
      &nbsp;&nbsp;
      <div className="menu-icon" onClick={openMenu}>
        ☰
      </div>
      {isMenuOpen && (
        <div className="menu">
          <h1>User Settings</h1>
          <ul>
            <li>Chat Log</li>
            <li>
              <Link to="/settings">Settings</Link>
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
