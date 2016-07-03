import { useDeps, composeAll } from 'mantra-core';
import { observer } from 'mobx-react';
import composeWithMobx from '../libs/with_mobx';
import Header from '../components/Header';

const onPropsChange = ({ context }, onData) => {
  const { title } = context().State.header;

  onData(null, {
    title,
  });
};

export default composeAll(
  composeWithMobx(onPropsChange),
  useDeps(),
)(observer(Header));
