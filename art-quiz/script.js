/* alert(
  'If possible, postpone the check until Thursday, maybe after 17.00, please. Or let me know the deadline when you can check. Thank you very much!',
); */

import { bootstrap, wfm } from './assets/modules/structure/index.js';
import { appModule } from './assets/modules/app/app.module.js';

wfm.delay().then(() => {
  bootstrap(appModule);
});
