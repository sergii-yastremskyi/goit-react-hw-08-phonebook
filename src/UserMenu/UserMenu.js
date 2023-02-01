import React from 'react';
import css from './userMenu.module.css';
// import * as api from '../components/shared/api/auth';
import { logOut } from '../components/redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUsername } from '../components/redux/auth/auth-selectors';
// import { Navigate, useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.userMenuContainer}>
      <p className={css.spacer}>{userName}</p>
      <img
        src="https://i.pravatar.cc/50"
        alt="User Avatar"
        width="50"
        height="50"
        className={css.spacer}
      ></img>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
}
