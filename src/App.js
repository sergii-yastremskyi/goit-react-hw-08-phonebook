import React, { Suspense, useEffect } from 'react';
import Register from './components/register/';
import Login from './components/login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contacts from './components/contacts';
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
    console.log('fetch user');
  }, [dispatch]);
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route index element={<HomeView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <PrivateRoute path="/contacts">
          <Contacts />
        </PrivateRoute> */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<HomeView />} />
      </Routes>

      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
    </>
  );
}
