const express = require('express');
const Controllers = require('../controllers/index');
const router = express.Router();

router.get('/', Controllers.getMain);

module.exports = router;
