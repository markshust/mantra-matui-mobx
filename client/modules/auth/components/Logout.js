import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import FlatButton from 'material-ui/FlatButton';

const Logout = ({ onClick }) => (
  <FlatButton onClick={onClick}>Logout</FlatButton>
);

Logout.propTypes = {
  onClick: PropTypes.func,
};

export default observer(Logout);
