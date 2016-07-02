import React from 'react';
import { observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from '../libs/theme';
import Header from '../containers/Header';

const MainLayout = ({ content = () => null }) => (
  <MuiThemeProvider muiTheme={theme}>
    <div>
      <header>
        <Header />
      </header>
      <main>{content()}</main>
    </div>
  </MuiThemeProvider>
);

MainLayout.propTypes = {
  content: React.PropTypes.any.isRequired,
};

export default observer(MainLayout);
