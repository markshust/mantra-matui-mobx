import { createApp } from 'mantra-core';
import { observable } from 'mobx';
import initContext from './configs/context';

import coreModule from './modules/core';
import authModule from './modules/auth';

const State = observable({
  ...coreModule.states,
  ...authModule.states,
});

const context = initContext({ State });
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(authModule);

app.init();
