import React, { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import AboutPage from './UserSettings/AboutPage/AboutPage';
import ChangeNamePage from './UserSettings/ChangeNamePage';
import ChangePasswordPage from './UserSettings/ChangePasswordPage';
import DeleteAccountPage from './UserSettings/DeleteAccountPage';
import './SettingsMenu.css'


export default function SettingsMenu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/settings/about" className="menu-link">About</Link>
          </li>
          <li>
            <Link to="/settings/change-name" className="menu-link">Change Name</Link>
          </li>
          <li>
            <Link to="/settings/change-password" className="menu-link">Change Password</Link>
          </li>
          <li>
            <Link to="/settings/delete-account" className="menu-link">Delete Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}