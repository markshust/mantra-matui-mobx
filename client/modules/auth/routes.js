import React from 'react';
import { mount } from 'react-mounter';

import AuthLayout from './components/AuthLayout';
import Login from './components/Login';

export default (injectDeps, { FlowRouter }) => {
  const AuthLayoutCtx = injectDeps(AuthLayout);
  const publicRoutes = FlowRouter.group({ name: 'public' });

  publicRoutes.route('/login', {
    name: 'login',
    action() {
      mount(AuthLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });
};
