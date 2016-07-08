import reactions from './reactions';
import routes from './routes';

export default {
  reactions,
  routes,
  load(_context) {
    reactions.auth(_context);
  },
};
