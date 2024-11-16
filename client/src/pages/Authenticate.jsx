import React, { useState } from 'react'
import '../styles/authenticate.css'
import Login from '../components/Login'
import Register from '../components/Register'
import {useNavigate} from 'react-router-dom'

const Authenticate = () => {

  const [authType, setAuthType] = useState('login');

  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="AuthenticatePage">
        <div className="auth-navbar">
          <h3 onClick={() => navigate("/")}>Work Hive</h3>
          <p onClick={() => navigate("/")}>Home</p>
        </div>

        {authType === "login" ? (
          <>
            <Login setAuthType={setAuthType} />
          </>
        ) : (
          <>
            <Register setAuthType={setAuthType} />
          </>
        )}
      </div>
    </div>
  );
}

export default Authenticate