import { action } from 'mobx';

export default {
  back: action(({ FlowRouter, Store }) => {
    FlowRouter.go(Store.core.route.basePath);
  }),

  fooTouchTap: action(({ FlowRouter, Store }) => {
    FlowRouter.go('foo');

    Store.core.sideNav.open = false;
  }),

  homeTouchTap: action(({ FlowRouter, Store }) => {
    FlowRouter.go('home');

    Store.core.sideNav.open = false;
  }),

  toggle: action(({ Store }) => {
    Store.core.sideNav.open = ! Store.core.sideNav.open;
  }),

  logout: ({ Meteor }) => {
    Meteor.logout();
  },
};
