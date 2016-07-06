import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Foo from '/client/modules/foo/components/Foo';

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

  authRoutes.route('/foo', {
    name: 'foo',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Foo />),
      });
    },
  });
}
