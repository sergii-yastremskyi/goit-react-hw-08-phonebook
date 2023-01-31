import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, redirect, Route } from 'react-router-dom';
import { getToken } from './redux/auth/auth-selectors';
import Login from './login';
import Contacts from './contacts';
export default function PrivateRoute() {
  const token = useSelector(getToken);

  return <div>{token === '' ? <Login /> : <Contacts />}</div>;
}
