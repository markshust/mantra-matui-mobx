import React from 'react';
import { observer } from 'mobx-react';
import AppBar from 'material-ui/AppBar';

const Header = ({ title }) => (
  <AppBar title={title} />
);

Header.propTypes = {
  title: React.PropTypes.string,
};

export default observer(Header);
