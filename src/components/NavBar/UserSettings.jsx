import { Link } from 'react-router-dom';

export default function UserSettings() {
  return (
    <div>
      <h1>User Settings</h1>
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
    </div>
  );
}