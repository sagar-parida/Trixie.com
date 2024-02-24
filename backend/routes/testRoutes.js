const router = require("express").Router();

router.get("/hello", async (req, res, next) => {
  try {
    res.send("Hello World");
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
