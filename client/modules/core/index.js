import actions from './actions';
import reactions from './reactions';
import routes from './routes';
import states from './states';

export default {
  actions,
  routes,
  states,
  load(_context, _actions) {
    reactions.header(_context, _actions);
  },
};
