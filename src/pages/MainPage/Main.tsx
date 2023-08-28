import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';

const Main = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeUser());
  };

  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleClick}>Exit</button>
    </div>
  ) : (
    <Link to="/auth/login">LOGIn</Link>
  );
};

export default Main;
