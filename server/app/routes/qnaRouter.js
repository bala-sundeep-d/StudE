const express = require('express');
const router  = express.Router();
const { fetchQnA, addQnA, updateQnA } = require('../controllers/qnaController');

router.post('/', addQnA);

router.get('/', fetchQnA);

router.patch('/', updateQnA);

module.exports = router;