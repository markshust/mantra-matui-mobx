import { useDeps, composeAll } from 'mantra-core';
import composeWithMobx from '../libs/with_mobx';
import SideNav from '../components/SideNav';

const onPropsChange = ({ context }, onData) => {
  const { open } = context().Store.core.sideNav;

  onData(null, {
    open,
  });
};

const depsMapper = (context, actions) => ({
  onHomeTouchTap: actions.sideNav.homeTouchTap,
  onRequestChange: actions.sideNav.toggle,
  onFooTouchTap: actions.sideNav.fooTouchTap,
  context: () => context,
});

export default composeAll(
  composeWithMobx(onPropsChange),
  useDeps(depsMapper),
)(SideNav);
