import { QComponent } from '../../structure/index.js';

class AppHeader extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const appHeader = new AppHeader({
  selector: '#app-header',
  template: `
    <nav>
      <ul>
        <li><a href="#home" class="home active-link">Home</a></li>
        <li><a href="#quiz" class="quiz">Quiz</a></li>
        <li><a href="#settings" class="settings">Settings</a></li>
      </ul>
    </nav>
`,
});
