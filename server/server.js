const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/router.js');

app.use(express.static(path.join(__dirname, '../client/public')));
app.use('/', router);

app.listen(8080, () => {
  console.log('On port 8080')
});
