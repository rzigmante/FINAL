const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallBack } = require("../utils/dbUtils");
const { verifyToken } = require("../utils/authenticationUtils");

const router = express.Router();

router.get("/user", (req, res) => {
  dbConnection.execute(`SELECT * FROM user`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  dbConnection.execute(
    `SELECT user.id, user.name, participant.id, participant.name FROM participants
    LEFT JOIN user
    ON participant.user_ID = user.id WHERE user.id IS NULL`,
    [id],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

module.exports = router;
