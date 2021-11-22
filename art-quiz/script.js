alert(
  'If possible, postpone the check until Thursday, maybe after 19.00, please. Or let me know the deadline when you can check. Thank you very much!',
);

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
