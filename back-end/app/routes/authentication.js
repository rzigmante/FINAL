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
    "INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)",
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
      message: "Neteisingas el. paštas arba slaptažodis",
    });

  if (!email || !password) {
    incorrectCredentialsResponse();
    return;
  }

  dbConnection.execute(
    "SELECT * FROM users WHERE email=?",
    [email],
    (err, result) => {
      if (result.length === 0) {
        incorrectCredentialsResponse();
      } else {
        const users = result[0];
        const isPasswordCorrect = bcrypt.compareSync(password, users.password);

        const { id, email } = users;

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
  res.json(res.locals.users);
});

module.exports = router;
