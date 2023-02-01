import css from './appBar.module.css';
import { connect, useDispatch } from 'react-redux';
import Navigation from '../components/Navigation/Navigation';
import authSelectors from '../components/redux/auth/auth-selectors';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { getToken } from '../components/redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import React from 'react';

export default function AppBar() {
  const token = useSelector(getToken);

  return (
    <header className={css.header}>
      <Navigation />
      {token && <UserMenu />}
      {!token && <AuthNav />}
      {/* {isAuthenticated ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
