import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import Logout from '/client/modules/auth/containers/Logout';

const style = {
  base: {
    display: 'flex',
    padding: 20,
  },
  children: {
    flex: 1,
  },
};

const Home = () => (
  <div style={style.base}>
    <div style={style.children}>
      <FlatButton
        href="/"
        linkButton
      >
        Home
      </FlatButton>
    </div>
    <div style={style.children}>
      <FlatButton
        href="/other"
        linkButton
      >
        Other
      </FlatButton>
    </div>
    <div style={style.children}>
      <Logout />
    </div>
  </div>
);

export default Home;
