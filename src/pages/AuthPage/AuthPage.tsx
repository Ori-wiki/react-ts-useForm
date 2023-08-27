import React from 'react';
import { Outlet } from 'react-router-dom';

import forestUrl from '../../images/marek-piwnicki-htqzuJF0tps-unsplash.jpg';

const AuthPage = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${forestUrl})`,
      }}
    >
      <Outlet />
    </div>
  );
};

export default AuthPage;
