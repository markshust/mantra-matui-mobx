import { useDeps, compose, composeAll } from 'mantra-core';
import Header from '../components/Header';

const onPropsChange = ({ context }, onData) => {
  const { State } = context();
  console.log('updating', State.header.title);
  onData(null, {
    title: State.header.title,
  });
};

export default composeAll(
  compose(onPropsChange),
  useDeps(),
)(Header);
