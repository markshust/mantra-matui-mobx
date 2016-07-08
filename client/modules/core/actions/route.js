import { action } from 'mobx';

export default {
  setCurrent: action(({ Store }, current) => {
    Store.core.route.current = current;
  }),
};
