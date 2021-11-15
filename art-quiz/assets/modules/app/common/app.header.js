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
      <ul id="header-nav">
        <li><a href="#home" class="home link active-link">Home</a></li>
        <li><a href="#quiz" class="quiz link">Quiz</a></li>
        <li><a href="#settings" class="settings link">Settings</a></li>
      </ul>
    </nav>
`,
});
