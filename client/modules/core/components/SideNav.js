import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const SideNav = ({
  onHomeTouchTap,
  onRequestChange,
  onFooTouchTap,
  open,
}) => (
  <Drawer
    docked={false}
    onRequestChange={onRequestChange}
    open={open}
  >
    <MenuItem onTouchTap={onHomeTouchTap}>Home</MenuItem>
    <MenuItem onTouchTap={onFooTouchTap}>Foo</MenuItem>
  </Drawer>
);

SideNav.propTypes = {
  onHomeTouchTap: PropTypes.func,
  onRequestChange: PropTypes.func,
  onFooTouchTap: PropTypes.func,
  open: PropTypes.bool,
};

export default SideNav;
