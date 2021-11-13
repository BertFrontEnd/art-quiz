import { QComponent } from '../../structure/index.js';

class SettingsPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const settingsPageComponent = new SettingsPageComponent({
  selector: '#app-settings-page',
  template: `<h1>Settings Page</h1>`,
});
