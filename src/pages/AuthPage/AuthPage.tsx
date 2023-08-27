import React from 'react';
import AuthForm from './AuthForm';
import forestUrl from '../../images/marek-piwnicki-htqzuJF0tps-unsplash.jpg';

const AuthPage = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${forestUrl})`,
      }}
    >
      <AuthForm />
    </div>
  );
};

export default AuthPage;
