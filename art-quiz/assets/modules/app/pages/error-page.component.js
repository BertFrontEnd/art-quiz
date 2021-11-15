import { QComponent } from '../../structure/index.js';

class ErrorPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const errorPageComponent = new ErrorPageComponent({
  selector: '#app-error-page',
  template: `<h1>404: page is no found</h1>`,
});
