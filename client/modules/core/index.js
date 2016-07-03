import actions from './actions';
import reactions from './reactions';
import routes from './routes';
import stores from './stores';

export default {
  actions,
  routes,
  stores,
  load(context) {
    reactions.header(context, actions);
  },
};
