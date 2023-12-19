import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css'; // Import your custom styles for LoginPage

// update user state defined in App from SignUpForm - setUser as a prop
export default function LoginPage({ setUser }) {
  const [login, setLogin] = useState(true);
  const toggleForm = () => {
    setLogin(!login);
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1 className="logo">BoomerBot</h1>
        {login ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        <p>
          {login ? "Don't have an account? " : "Already have an account? "}
          <button onClick={toggleForm}>{login ? "Sign Up" : "Login"}</button>
        </p>
      </div>
    </main>
  );
}