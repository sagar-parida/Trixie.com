const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
