import { QComponent } from '../../structure/index.js';

class HomePageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const homePageComponent = new HomePageComponent({
  selector: '#app-home-page',
  template: `<h1>Home Page</h1>`,
});
