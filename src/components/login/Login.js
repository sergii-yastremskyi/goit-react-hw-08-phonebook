import React from 'react';
import css from './login.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import style from '../shared/shared.module.css';
import { logIn } from '../redux/auth/auth-operations';
import { getToken } from '../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
export default function Login() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const formSubmitHandler = () => {
    dispatch(logIn({ email: mail, password: pass }));
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'mail':
        setMail(value);
        break;
      case 'pass':
        setPass(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler();
    reset();
  };
  const reset = () => {
    setMail('');
    setPass('');
  };
  const mailId = nanoid();
  const passId = nanoid();
  const token = useSelector(getToken);
  return (
    <div>
      {token === '' ? (
        <div className={style.container}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className={css.formContainer}>
              <label htmlFor={mailId}>Email</label>
              <input
                id={mailId}
                type="email"
                value={mail}
                name="mail"
                onChange={handleChange}
              />
            </div>
            <div className={css.formContainer}>
              <label htmlFor={passId}>Password</label>
              <input
                id={passId}
                onChange={handleChange}
                value={pass}
                type="password"
                name="pass"
                required
              />
            </div>
            <button type="submit">Log in!</button>
          </form>
        </div>
      ) : (
        <Navigate to="/contacts" />
      )}
    </div>
  );
}
