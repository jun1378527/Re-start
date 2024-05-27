const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("안녕 난 index router야");
});

module.exports = router;
