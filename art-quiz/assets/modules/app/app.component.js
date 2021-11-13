import { QComponent } from '../structure/index.js';

class AppComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: '#app-root',
  template: `
    <header id="app-header" class="app-header"></header>
    <main id="app-main-router" class="app-main-router"></main>
    <footer id="app-footer" class="app-footer"></footer>
  `,
});
