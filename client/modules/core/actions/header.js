import routeRootName from '../libs/route_root_name';
import { action } from 'mobx';

export default {
  setTitle: action(({ State }, title) => {
    State.header.title = routeRootName(title);
  }),
};
