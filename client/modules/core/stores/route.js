import { observable } from 'mobx';
import routeRootName from '../libs/route_root_name';
import routeBasePath from '../libs/route_base_path';

export default observable({
  current: {},
  name: function name() {
    return this.current ? this.current.name : '';
  },
  title: function title() {
    if (! this.current) return '';

    const { name, options } = this.current;
    const titleVal = options.title;

    return options && titleVal
      ? titleVal
      : routeRootName(name);
  },
  path: function path() {
    return this.current ? this.current.path : '';
  },
  basePath: function basePath() {
    return this.path ? routeBasePath(this.path) : '';
  },
});
