const express = require("express");
const cors = require("./cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const testRouter = require("./routes/testRoutes");
const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");
const authenticateToken = require("./middleware/auth/authenticateToken");
const authorizeRoles = require("./middleware/auth/authorizeRoles");

app.use(express.json());
app.use(cors);
app.use("/", testRouter);
app.use("/user", authenticateToken, userRouter);
app.use("/admin", authenticateToken, authorizeRoles(["admin"]), adminRouter);

app.listen(process.env.API_PORT, () => {
  console.log(`Server started at port ${process.env.API_PORT}`);
});
