import { createApp } from 'mantra-core';
import { observable } from 'mobx';
import initContext from './configs/context';

import coreModule from './modules/core';
import authModule from './modules/auth';

const Store = observable({
  ...coreModule.stores,
  ...authModule.stores,
});

const context = initContext({ Store });
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(authModule);

app.init();
