import { useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ChatPage />
                  <Outlet />
                </>
              }
            />
            <Route path="/settings/*" element={<SettingsPage />} > 
              {/* call setUser for change name to update the user's name in real time */}
              <Route path="change-name" element={<ChangeNamePage setUser={setUser} />} />
              <Route path="change-password" element={<ChangePasswordPage />} />
              <Route path="delete-account" element={<DeleteAccountPage setUser={setUser} />} />
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
      <Outlet />
    </div>
  );
}
