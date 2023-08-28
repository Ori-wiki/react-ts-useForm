import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';

const Main = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeUser());
  };

  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={handleClick}>Exit {email}</button>
    </div>
  ) : (
    <Link to="/auth/login">LOGIn</Link>
  );
};

export default Main;
