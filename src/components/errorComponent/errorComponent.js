import { useDispatch } from 'react-redux';
import React from 'react';
import { errorClear } from '../redux/auth/authSlice';
import { useEffect } from 'react';

export default function ErrorComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('error');
    setTimeout(() => {
      dispatch(errorClear());
    }, 2000);
  }, []);
  return <p>Помилка Валідації</p>;
}

// const dispatch = useDispatch;
// useEffect(() => {
//   // console.log('useEfect');
//   // console.log(errorState);
//   console.log('error');
//   setTimeout(() => {
//     dispatch(errorClear());
//   }, 2000);
// }, []);
// return <p>Помилка Валідації</p>;
