import { QModule } from '../structure/index.js';
import { appComponent } from './app.component.js';
import { appHeader } from './common/app.header.js';
import { appFooter } from './common/app.footer.js';
import { appRoutes } from './app.routes.js';

class AppModule extends QModule {
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  bootstrap: appComponent,
  components: [appHeader, appFooter],
  routes: appRoutes,
});
