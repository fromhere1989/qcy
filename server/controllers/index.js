const path = require('path');

getMain = (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/main.html'))
};

module.exports = {
  getMain
};
