import React from 'react';
import css from './register.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import style from '../shared/shared.module.css';
import { signUp } from '../redux/auth/auth-operations';

export default function Register() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const formSubmitHandler = (mail, pass, name) => {
    dispatch(signUp({ name: name, password: pass, email: mail }));
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
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    formSubmitHandler(mail, pass, name);
    reset();
  };
  const reset = () => {
    setMail('');
    setPass('');
    setName('');
  };
  const mailId = nanoid();
  const passId = nanoid();
  const nameId = nanoid();
  return (
    <div className={style.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={css.formContainer}>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
