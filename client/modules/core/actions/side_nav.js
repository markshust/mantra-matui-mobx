import { action } from 'mobx';

export default {
  homeTouchTap: action(({ FlowRouter, Store }) => {
    FlowRouter.go('home');

    Store.core.sideNav.open = false;
  }),

  toggle: action(({ Store }) => {
    Store.core.sideNav.open = ! Store.core.sideNav.open;
  }),

  fooTouchTap: action(({ FlowRouter, Store }) => {
    FlowRouter.go('foo');

    Store.core.sideNav.open = false;
  }),

  logout: ({ Meteor }) => {
    Meteor.logout();
  },
};
