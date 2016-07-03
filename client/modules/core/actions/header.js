import routeRootName from '../libs/route-root-name';
import { action } from 'mobx';

export default {
  setTitle: action(({ State }, title) => {
    State.header.title = routeRootName(title);
  }),
};
