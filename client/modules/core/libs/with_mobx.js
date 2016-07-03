import { compose } from 'mantra-core';

export default function composeWithMobx(fn, L, E, options) {
  const onPropsChange = (props, onData) => {
    window.setTimeout(() => fn(props, onData), 0);
  };

  return compose(onPropsChange, L, E, options);
}
