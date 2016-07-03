import routeRootName from '../libs/route-root-name';
import { action } from 'mobx';

export default {
  setTitle: action(({ Store }, title) => {
    Store.header.title = routeRootName(title);
  }),
};
