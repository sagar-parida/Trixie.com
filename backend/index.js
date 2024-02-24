const express = require("express");
const cors = require("./cors");
const app = express();
const testRouter = require("./routes/testRoutes");

app.use(express.json());
app.use(cors);
app.use("/", testRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
