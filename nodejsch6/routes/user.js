const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User main page");
});

router.get("/user/:id", (req, res) => {
  res.send(`<p>user ${req.params.id} page</p>`);
});

router.get("/abc", (req, res) => {
  res.send("abc로 Get 보냈구나");
});

router.post("/abc", (req, res) => {
  res.send("abc로 post 보냈구나");
});

// GET 및 POST 요청을 묶어서 처리
router
  .route("/abc2")
  .get((req, res) => {
    res.send("abc2로 GET 보냈구나");
  })
  .post((req, res) => {
    res.send("abc2로 POST 보냈구나");
  });

router.get("/profile", (req, res) => {
  res.send("User profile page");
});

router.get("/settings", (req, res) => {
  res.send("User settings page");
});

module.exports = router;
