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
        <li><a href="#home">Home</a></li>
        <li><a href="#quiz">Quiz</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
`,
});
