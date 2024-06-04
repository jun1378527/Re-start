const express = require('express');
const router = express.Router();
const userRouter = require('./user'); // user 라우트 불러오기

router.use('/users', userRouter);

module.exports = router;
