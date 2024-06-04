const express = require('express');
const { User } = require('../models'); // Sequelize User 모델 불러오기
const router = express.Router();

// 새로운 사용자 생성
router.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 사용자 목록 조회
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
