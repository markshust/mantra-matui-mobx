import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from '/client/modules/core/libs/theme';

const AuthLayout = ({ content = () => null }) => (
  <MuiThemeProvider muiTheme={theme}>
    <div>
      <main>{content()}</main>
    </div>
  </MuiThemeProvider>
);

AuthLayout.propTypes = {
  content: React.PropTypes.any.isRequired,
};

export default AuthLayout;
