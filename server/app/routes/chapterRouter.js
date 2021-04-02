const express = require('express');
const router  = express.Router();
const {
    fetchChapterById,
    fetchChaptersBySubjectId,
    createChapter,
    updateChapter
} = require('../controllers/chapterController');

router.post('/', createChapter);

router.get('/:chapterId', fetchChapterById);

router.get('/', fetchChaptersBySubjectId);

router.patch('/', updateChapter);

module.exports = router;