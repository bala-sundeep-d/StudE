
const express = require('express');
const router  = express.Router();
const path = require('path');
const authRouter = require('./authentication');

router.get('/*',function(req,res){
    res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
});

router.use('/login', authRouter);

module.exports = router;