import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import ChatPage from '../ChatPage/ChatPage';
import NavBar from '../../components/NavBar/NavBar';
import ChangeNamePage from '../../components/NavBar/UserSettings/ChangeNamePage';
import ChangePasswordPage from '../../components/NavBar/UserSettings/ChangePasswordPage';
import DeleteAccountPage from '../../components/NavBar/UserSettings/DeleteAccountPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Outlet />
          <Routes>
            <Route path="/settings">
              <Route index element={<SettingsPage />} />
              <Route path="change-name" element={<ChangeNamePage />} />
              <Route path="change-password" element={<ChangePasswordPage />} />
              <Route path="delete-account" element={<DeleteAccountPage />} />
            </Route>
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}

function SettingsPage() {
  return (
    <div>
      <h1>Settings</h1>
      {/* You can add additional content for the main settings page here */}
    </div>
  );
}