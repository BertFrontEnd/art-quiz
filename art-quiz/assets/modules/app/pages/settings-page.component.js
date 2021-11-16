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
      <output class="volume-value-quiz">50</output>
      <div class="input-settings-quiz">
        <input type="checkbox" id="volume" class="checkbox-quiz checkbox-volume-quiz" />
        <label for="volume" class="label-quiz label-volume-quiz"></label>
        <input type="range" min="0" max="100" value="50" class="range-setting-quiz volume-range-quiz" disabled="disabled" />
      </div>
    </div >
    <div class="time-quiz">
      <div class="icon-settings-quiz icon-time-quiz"></div>
      <output class="timer-value-quiz">15</output>
      <div class="input-settings-quiz">
        <input type="checkbox" id="timer" class="checkbox-quiz checkbox-time-quiz" />
        <input type="range" min="10" max="20" value="15" step="5" class="range-setting-quiz timer-range-quiz" disabled="disabled" />
        <label for="timer" class="label-quiz label-timer-quiz"></label>
      </div>
    </div>
  `,
});
