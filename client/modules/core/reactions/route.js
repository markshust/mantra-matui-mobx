export default ({ FlowRouter, Tracker }, actions) => {
  // Redirect to login if user isn't authenticated and on auth route
  Tracker.autorun(() => {
    FlowRouter.watchPathChange();

    const currentCtx = FlowRouter.current();

    actions.route.setCurrent(currentCtx.route);
  });
};
