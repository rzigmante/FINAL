const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { dbConnection } = require("../db");
const { defaultCallBack } = require("../utils/dbUtils");
const { verifyToken } = require("../utils/authenticationUtils");

const router = express.Router();

router.post("/register", (req, res) => {
  const {
    body: { name, surname, email, password },
  } = req;

  const hashedPassword = bcrypt.hashSync(password, 12);

  dbConnection.execute(
    "INSERT INTO user (name, surname, email, password) VALUES (?, ?, ?, ?)",
    [name, surname, email, hashedPassword],
    (err, result) => defaultCallBack(err, result, res)
  );
});

router.post("/login", (req, res) => {
  const {
    body: { email, password },
  } = req;

  const incorrectCredentialsResponse = () =>
    res.json({
      message: "Neteisingas el. paštas arba slaptažodils",
    });

  if (!email || !password) {
    incorrectCredentialsResponse();
    return;
  }

  clientsDbConnection.execute(
    "SELECT * FROM user WHERE email=?",
    [email],
    (err, result) => {
      if (result.length === 0) {
        incorrectCredentialsResponse();
      } else {
        const user = result[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        const { id, email } = user;

        if (isPasswordCorrect) {
          const token = jwt.sign({ id, email }, process.env.JWT_SECRET);
          res.json({
            message: "Sėkmingai prisijungėlte!",
            token,
          });
        } else {
          incorrectCredentialsResponse();
        }
      }
    }
  );
});

router.get("/token/verify", verifyToken, (req, res) => {
  res.json(res.locals.user);
});

module.exports = router;
