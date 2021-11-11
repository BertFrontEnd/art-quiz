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
    <div class="direction">Artist <span class="quiz">Art-Quiz</span></div>
    <div class="direction">Pictures <span class="quiz">Art-Quiz</span></div>
  `,
});
