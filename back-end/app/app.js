require("dotenv").config();

const express = require("express");
const cors = require("cors");
const participantsRouter = require("./routes/participants");
const userRouter = require("./routes/users");
const authenticationRouter = require("./routes/authentication");

const app = express();

app.use(cors());
app.use(express.json());
app.use(participantsRouter);
app.use(userRouter);
app.use(authenticationRouter);

app.listen(8000, () => {
  console.log(`Server is running on on port 8000`);
});
