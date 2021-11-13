import { QComponent } from '../../structure/index.js';

class AppFooter extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const appFooter = new AppFooter({
  selector: '#app-footer',
  template: `
    <ul>
      <li>BertFrontEnd</li>
      <li>2021</li>
      <li>RS School</li>
    </ul>
`,
});
