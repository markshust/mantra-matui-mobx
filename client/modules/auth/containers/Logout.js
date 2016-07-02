import { useDeps, compose, composeAll } from 'mantra-core';
import Logout from '../components/Logout';

const onPropsChange = (props, onData) => {
  onData(null, {});
};

const depsMapper = (context, actions) => ({
  onClick: actions.auth.logout,
});

export default composeAll(
  compose(onPropsChange),
  useDeps(depsMapper),
)(Logout);
