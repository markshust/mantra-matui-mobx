import React from 'react';
import { observer } from 'mobx-react';

import AccountsUi from './AccountsUi';

const Login = () => (
  <div>
    <h1>Login</h1>
    <AccountsUi />
  </div>
);

export default observer(Login);
