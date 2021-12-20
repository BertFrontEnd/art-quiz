import { QComponent } from '../../structure/index.js';

class ErrorPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const errorPageComponent = new ErrorPageComponent({
  selector: '#app-error-page',
  template: `<div class="error-quiz">404: page is not found</div>`,
});
