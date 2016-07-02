import actions from './actions';
import reactions from './reactions';
import routes from './routes';

export default {
  actions,
  reactions,
  routes,
  load(context) {
    reactions.auth(context);
  },
};
