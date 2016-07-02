import routeRootName from '../libs/route-root-name';

export default {
  setTitle({ State }, title) {
    State.header.title = routeRootName(title);
    console.log(State.header.title);
  },
};
