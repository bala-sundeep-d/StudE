const express = require('express');
const router  = express.Router();
const { createNote, fetchNote, updateNote } = require('../controllers/noteController');

router.post('/', createNote);

router.get('/', fetchNote);

router.patch('/', updateNote);

module.exports = router;