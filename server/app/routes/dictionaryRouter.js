const express = require('express');
const router  = express.Router();
const { getMeaning } = require('../controllers/dictionaryController');

router.get('/find', getMeaning);

module.exports = router;