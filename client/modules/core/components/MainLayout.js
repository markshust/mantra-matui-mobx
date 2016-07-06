import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from '../libs/theme';
import Header from '../containers/Header';
import SideNav from '../containers/SideNav';

const MainLayout = ({ content = () => null }) => (
  <MuiThemeProvider muiTheme={theme}>
    <div>
      <header>
        <Header />
        <SideNav />
      </header>
      <main>{content()}</main>
    </div>
  </MuiThemeProvider>
);

MainLayout.propTypes = {
  content: React.PropTypes.any.isRequired,
};

export default MainLayout;
