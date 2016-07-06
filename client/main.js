import { createApp } from 'mantra-core';
import initContext from './configs/context';

import coreModule from './modules/core';
import authModule from './modules/auth';
import fooModule from './modules/foo';

const Store = {
  ...coreModule.stores,
};

const context = initContext({ Store });
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(authModule);
app.loadModule(fooModule);

app.init();
