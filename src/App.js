import React, { Suspense, useEffect } from 'react';
import Register from './components/register/';
import Login from './components/login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import HomeView from './components/HomeView';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './components/redux/auth/auth-operations';
import { getToken } from './components/redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route index element={<HomeView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<PrivateRoute />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        <Route path="/*" element={<HomeView />} />
      </Routes>

      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
    </>
  );
}
