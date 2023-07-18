import React from 'react';
import Login from './Login/Login';

import './AuthPage.css';
import Register from './Register/Register';

const AuthPage: React.FC<{ login: boolean }> = ({ login }) => {
  return <div className='auth-page'>{login ? <Login /> : <Register />}</div>;
};

export default AuthPage;
