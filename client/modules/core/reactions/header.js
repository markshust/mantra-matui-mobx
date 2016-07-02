export default (context, actions) => {
  const { FlowRouter, Tracker } = context;

  // Redirect to login if user isn't authenticated and on auth route
  Tracker.autorun(() => {
    FlowRouter.watchPathChange();

    const currentCtx = FlowRouter.current();
    const currentRoute = currentCtx.route;
    const currentName = currentRoute ? currentRoute.name : '';

    actions.header.setTitle(context, currentName);
  });
};
