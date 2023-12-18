import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

// update user state defined in App from LoginForm - setUser as a prop
export default function LoginPage({ setUser }) {
  const [login, setLogin] = useState(true);
  const toggleForm = () => {
    setLogin(!login);
  };

  return (
    <div className="login-container">
      <header><h1>BoomerBot</h1></header>
      {login ? <LoginForm setUser={setUser} /> :  <SignUpForm setUser={setUser} />}
      <p>
        {login ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleForm}>{login ? "Sign Up" : "Login"}</button>
      </p>
    </div>
  );
}