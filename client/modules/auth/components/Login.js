import React from 'react';

import AccountsUi from './AccountsUi';

const styles = {
  base: {
    padding: 20,
    textAlign: 'center',
  }
};

const Login = () => (
  <div style={styles.base}>
    <h1>Login</h1>
    <AccountsUi />
  </div>
);

export default Login;
