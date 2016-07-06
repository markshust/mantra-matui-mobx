import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Header = ({
  onLeftIconButtonTouchTap,
  onLogoutTouchTap,
  title,
}) => (
  <AppBar
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Logout" onTouchTap={onLogoutTouchTap} />
      </IconMenu>
    }
    onLeftIconButtonTouchTap={onLeftIconButtonTouchTap}
    title={title}
  />
);

Header.propTypes = {
  onLeftIconButtonTouchTap: PropTypes.func,
  onLogoutTouchTap: PropTypes.func,
  title: PropTypes.string,
};

export default Header;
