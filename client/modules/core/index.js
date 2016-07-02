import actions from './actions';
import reactions from './reactions';
import routes from './routes';
import states from './states';

export default {
  actions,
  routes,
  states,
  load(context) {
    reactions.header(context, actions);
  },
};
