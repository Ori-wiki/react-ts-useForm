import React from 'react';
import AuthPage from './pages/AuthPage/AuthPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<AuthPage />} />
        <Route path='/register' element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
