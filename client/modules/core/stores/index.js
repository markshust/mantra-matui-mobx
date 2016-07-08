import { useStrict } from 'mobx';

useStrict(true);

import route from './route';
import sideNav from './side_nav';

export default {
  core: {
    route,
    sideNav,
  },
};
