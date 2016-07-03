export default ({ FlowRouter, Tracker }, actions) => {
  // Redirect to login if user isn't authenticated and on auth route
  Tracker.autorun(() => {
    FlowRouter.watchPathChange();

    const currentCtx = FlowRouter.current();
    const currentRoute = currentCtx.route;
    const currentName = currentRoute ? currentRoute.name : '';

    actions.header.setTitle(currentName);
  });
};
