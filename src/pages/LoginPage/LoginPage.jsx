import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

// update user state defined in App from SignUpForm - setUser as a prop
export default function LoginPage({ setUser }) {
  const [login, setLogin] = useState(true);
  const toggleForm = () => {
    setLogin(!login);
  };

  return (
    <main>
      <h1>BoomerBot</h1>
      {login ? <LoginForm setUser={setUser} /> :  <SignUpForm setUser={setUser} />}
      <p>
        {login ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleForm}>{login ? "Sign Up" : "Login"}</button>
      </p>
    </main>
  );
}