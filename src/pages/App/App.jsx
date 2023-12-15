import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// set user state
import { getUser } from '../../utilities/users-service';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  // set user state
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
        <>
          {/* render user's name in Nav Bar - 1. pass user prop to Nav Bar and set value to user state */}
          {/* for logout - pass setUser from App to NavBar prop */}
          <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              
            </Routes>
          </>
          :
          // update user state defined in App from SignUpForm - setUser as a prop
          <LoginPage setUser={setUser} />
      }
    </main>
  );
}
