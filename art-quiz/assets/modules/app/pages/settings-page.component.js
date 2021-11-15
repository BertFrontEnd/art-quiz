import { QComponent } from '../../structure/index.js';

class SettingsPageComponent extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const settingsPageComponent = new SettingsPageComponent({
  selector: '#app-settings-page',
  template: `
    <div class="volume-quiz">
      <div class="icon-settings-quiz icon-volume-quiz"></div>
      <input type="range" min="0" max="100" value="50" class="volume-range-quiz" />
      <input type="checkbox" checkbox-volume-quiz checked />
    </div >
    <div class="time-quiz">
      <div class="icon-settings-quiz icon-time-quiz"></div>
      <input type="range" min="10" max="30" value="15" step="10" class="time-range-quiz" />
      <input type="checkbox" checkbox-time-quiz checked />
    </div >
  `,
});
