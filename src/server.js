console.clear();
require('prototypes-array');
require('prototypes-string');
require('dotenv').config({ path: '../.env' });

const { app } = require("./app");

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('running server at http://localhost:' + PORT, process.env.NODE_ENV);
  }
});