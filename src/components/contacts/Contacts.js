import React, { useEffect } from 'react';
import Form from '../form';
import styles from '../../components/shared/shared.module.css';
import ContactsList from '../contactsList';
import Filter from '../filter';
import { useSelector } from 'react-redux';

import { css } from 'styled-components';
import { getToken } from '../redux/auth/auth-selectors';
import { instanceContacts } from '../shared/api/contacts';
import { Navigate, redirect } from 'react-router-dom';
export default function Contacts() {
  const token = useSelector(getToken);

  return (
    <div>
      {token !== '' ? (
        <div>
          <div className={(styles.container, styles.border)}>
            <h1>Phonebook</h1>
            <Form />
          </div>
          <div className={styles.container}>
            <h1>Contacts</h1>
            <Filter className={css.filter} />
            <ContactsList className={styles.contactList} />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
