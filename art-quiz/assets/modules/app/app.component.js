import { QComponent } from '../structure/index.js';

class AppComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: '#app-root',
  template: `
    <header id="app-header" class="header"></header>
    <main id="app-main-router" class="main"></main>
    <footer id="app-footer" class="footer"></footer>
  `,
});
