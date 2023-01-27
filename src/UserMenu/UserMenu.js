import React from 'react';
import css from './userMenu.module.css';
// import * as api from '../components/shared/api/auth';
import { logOut } from '../components/redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUsername } from '../components/redux/auth/auth-selectors';
import { Navigate, useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token = useSelector(getToken);
  console.log(userName);
  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{userName}</p> <span>avatar</span>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}
