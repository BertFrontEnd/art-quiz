import { QModule } from '../structure/index.js';
import { appComponent } from './app.component.js';
import { appHeader } from './common/app.header.js';

class AppModule extends QModule {
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  components: [appHeader],
  bootstrap: appComponent,
});
