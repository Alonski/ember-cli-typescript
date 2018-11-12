'use strict';

import * as os from 'os';
import * as fs from 'fs';

// Watchman gets upset when it receives non-canonical paths as watch roots
export default () => fs.realpathSync(os.tmpdir());
