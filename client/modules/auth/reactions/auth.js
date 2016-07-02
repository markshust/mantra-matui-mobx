export default ({ FlowRouter, Meteor, Tracker }) => {
  // Redirect to login if user isn't authenticated and on auth route
  Tracker.autorun(() => {
    FlowRouter.watchPathChange();

    const currentCtx = FlowRouter.current();
    const currentRoute = currentCtx.route;
    const currentGroup = currentRoute ? currentRoute.group.name : null;

    if (! Meteor.userId()
      && ! Meteor.loggingIn()
      && currentGroup === 'auth'
    ) {
      FlowRouter.go('login');
    }
  });

  // Redirect to home if user is authenticated and on public route
  Tracker.autorun(() => {
    FlowRouter.watchPathChange();

    const currentCtx = FlowRouter.current();
    const currentRoute = currentCtx.route;
    const currentGroup = currentRoute ? currentRoute.group.name : null;

    if (Meteor.userId()
      && currentGroup === 'public'
    ) {
      FlowRouter.go('home');
    }
  });
};
