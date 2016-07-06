import { useDeps, composeAll } from 'mantra-core';
import composeWithMobx from '../libs/with_mobx';
import Header from '../components/Header';

const onPropsChange = ({ context }, onData) => {
  const { rootName } = context().Store.core.route;

  onData(null, {
    title: rootName,
  });
};

const depsMapper = (context, actions) => ({
  onLeftIconButtonTouchTap: actions.sideNav.toggle,
  onLogoutTouchTap: actions.sideNav.logout,
  context: () => context,
});

export default composeAll(
  composeWithMobx(onPropsChange),
  useDeps(depsMapper),
)(Header);
