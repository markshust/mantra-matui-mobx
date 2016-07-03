import routeRootName from '../libs/route_root_name';
import { action } from 'mobx';

export default {
  setRootName: action(({ Store }, title) => {
    Store.route.rootName = routeRootName(title);
  }),
};
