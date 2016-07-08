import { useDeps, composeAll } from 'mantra-core';
import composeWithMobx from '../libs/with_mobx';
import Header from '../components/Header';

const onPropsChange = ({ context }, onData) => {
  const { title } = context().Store.core.route;

  onData(null, {
    title,
  });
};

const depsMapper = (context, actions) => ({
  onLeftIconButtonTouchTap: actions.sideNav.toggle,
  onLogoutTouchTap: actions.header.logout,
  context: () => context,
});

export default composeAll(
  composeWithMobx(onPropsChange),
  useDeps(depsMapper),
)(Header);
