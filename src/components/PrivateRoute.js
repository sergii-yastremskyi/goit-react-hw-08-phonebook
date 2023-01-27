import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, redirect, Route } from 'react-router-dom';
import { getToken } from './redux/auth/auth-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const token = useSelector(getToken());
  if (token === '') {
    redirect('/login');
  }
  return <Route {...routeProps}>{children}</Route>;
}
