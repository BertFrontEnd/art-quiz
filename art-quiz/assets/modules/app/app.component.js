import { QComponent } from '../structure/index.js';

class AppComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <div>RS School</div>
    <div>2021</div>
    <div>BertFrontEnd</div>
  `,
});
