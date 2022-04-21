import 'prototypes-array';
import 'prototypes-string';
require('dotenv').config({ path: '../.env' });

import { server } from "./src/app";

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('\nServer', {
      status: 'running',
      url: (process.env.HTTPS ? 'https://' : 'http://') + 'localhost:' + PORT,
      NODE_ENV: process.env.NODE_ENV||'development'
    }, '\n');
  }
});