import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthForm } from './AuthForm/AuthForm';

import './AuthPage.css';

const AuthPage: React.FC = () => {
  return (
    <div className='auth-page'>
      {/* <Routes> */}
      <AuthForm />
      {/* </Routes> */}
    </div>
  );
};

export default AuthPage;
