import { Link, Routes, Route } from 'react-router-dom';
import ChangeNamePage from './UserSettings/ChangeNamePage';
import ChangePasswordPage from './UserSettings/ChangePasswordPage';
import DeleteAccountPage from './UserSettings/DeleteAccountPage';
import React, { useState } from "react";

export default function SettingsMenu() {
  const [isNestedMenuOpen, setIsNestedMenuOpen] = useState(false);

  const openNestedMenu = () => {
    setIsNestedMenuOpen(!isNestedMenuOpen);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={openNestedMenu}>
              Settings
            </Link>
            {isNestedMenuOpen && (
              <ul>
                <li>
                  <Link to="/settings/change-name">Change Name</Link>
                </li>
                <li>
                  <Link to="/settings/change-password">Change Password</Link>
                </li>
                <li>
                  <Link to="/settings/delete-account">Delete Account</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/settings/change-name" element={<ChangeNamePage />} />
        <Route path="/settings/change-password" element={<ChangePasswordPage />} />
        <Route path="/settings/delete-account" element={<DeleteAccountPage />} />
      </Routes>
    </div>
  );
}