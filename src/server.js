import 'prototypes-array';
import 'prototypes-string';
require('dotenv').config({ path: '../.env' });

import { server } from "./app";

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('running server at http://localhost:' + PORT, process.env.NODE_ENV);
  }
});