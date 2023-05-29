const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallBack } = require("../utils/dbUtils");
const { verifyToken } = require("../utils/authenticationUtils");

const router = express.Router();

router.get("/users", verifyToken, (req, res) => {
  dbConnection.execute(`SELECT * FROM users`, (err, result) =>
    defaultCallBack(err, result, res)
  );
});

router.post("/register", verifyToken, (req, res) => {
  const {
    body: { name, surname, email, password },
  } = req;

  dbConnection.execute(
    "INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)",
    [name, surname, email, password],
    (err, result) => defaultCallBack(err, result, res)
  );
});

module.exports = router;
