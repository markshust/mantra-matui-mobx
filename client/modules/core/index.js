import './startup';
import actions from './actions';
import reactions from './reactions';
import routes from './routes';
import stores from './stores';
import styles from './styles';

export default {
  actions,
  routes,
  stores,
  styles,
  load(_context, _actions) {
    reactions.route(_context, _actions);
  },
};
