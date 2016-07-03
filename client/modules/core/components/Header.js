import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = ({ title }) => (
  <AppBar title={title} />
);

Header.propTypes = {
  title: React.PropTypes.string,
};

export default Header;
