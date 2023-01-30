import React from 'react';
import style from '../shared/shared.module.css';
export default function HomeView() {
  return (
    <div className={style.container}>
      <h1>Web phonebook</h1>
      <p>Please authentificate to proceed</p>
    </div>
  );
}
