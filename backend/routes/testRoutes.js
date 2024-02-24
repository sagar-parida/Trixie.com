const generateToken = require("../middleware/auth/generateToken");

const router = require("express").Router();

router.get("/login", async (req, res, next) => {
  try {
    const user = {
      id: "123",
      username: "Sagar",
      roles: ["user"],
    };

    const token = generateToken(user);

    res.status(200).json({ token: token });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
