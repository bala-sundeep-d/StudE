const express = require('express');
const router  = express.Router();
const { createDiscussion, fetchDiscussion, updateDiscussion } = require('../controllers/discussionController');

router.post('/', createDiscussion);

router.get('/', fetchDiscussion);

router.patch('/', updateDiscussion);

module.exports = router;