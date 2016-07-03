import actions from './actions';
import reactions from './reactions';
import routes from './routes';

export default {
  actions,
  reactions,
  routes,
  load(_context) {
    reactions.auth(_context);
  },
};
