import {
  getHash,
  saveActiveLink,
  playSound,
  playSoundOnLoad,
} from './assets/modules/app/app.listeners.js';
import { bootstrap, wfm } from './assets/modules/structure/index.js';
import { appModule } from './assets/modules/app/app.module.js';
import { setActiveLink } from './assets/modules/structure/tools/link.js';
import { checkBoxValue } from './assets/modules/app/app.listeners.js';

wfm
  .delay(10)
  .then(() => {
    bootstrap(appModule);
  })
  .then(setActiveLink)
  .then(saveActiveLink)
  .then(playSoundOnLoad)
  .then(playSound)
  .then(checkBoxValue)
  .catch((error) => new Error(error));

getHash();
