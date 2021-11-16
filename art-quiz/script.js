/* alert(
  'If possible, postpone the check until Thursday, maybe after 17.00, please. Or let me know the deadline when you can check. Thank you very much!',
); */

import { getHash, saveActiveLink } from './assets/modules/app/app.listeners.js';
import { bootstrap, wfm } from './assets/modules/structure/index.js';
import { appModule } from './assets/modules/app/app.module.js';
import { setActiveLink } from './assets/modules/structure/tools/link.js';

wfm
  .delay(1000)
  .then(() => {
    bootstrap(appModule);
  })
  .then(setActiveLink)
  .then(saveActiveLink);

getHash();
