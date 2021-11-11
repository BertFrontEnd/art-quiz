import { QComponent } from '../../structure/index.js';

class AppHeader extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
    <nav>
      <ul>
        <li>Home</li>
        <li>Quiz</li>
        <li>Settings</li>
      </ul>
    </nav>
`,
});
