import actions from './actions';
import reactions from './reactions';
import routes from './routes';
import stores from './stores';

export default {
  actions,
  routes,
  stores,
  load(_context, _actions) {
    reactions.route(_context, _actions);
  },
};
