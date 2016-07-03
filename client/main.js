import { createApp } from 'mantra-core';
import initContext from './configs/context';

import coreModule from './modules/core';
import authModule from './modules/auth';

const Store = {
  ...coreModule.stores,
  ...authModule.stores,
};

const context = initContext({ Store });
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(authModule);

app.init();
