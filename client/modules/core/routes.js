import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/MainLayout';
import Home from './components/Home';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const authRoutes = FlowRouter.group({ name: 'auth' });

  authRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />),
      });
    },
  });

  authRoutes.route('/other', {
    name: 'other',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />),
      });
    },
  });
}
