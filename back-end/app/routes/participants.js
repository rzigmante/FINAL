const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbUtils");

const router = express.Router();

router.get("/participants", (req, res) => {
  dbConnection.execute(`SELECT * FROM participants`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.post("/participants", (req, res) => {
  const { name, surname, email, phone } = req.body;

  const postQuery =
    "INSERT INTO participants (name, surname, email, phone) VALUES (?, ?, ?, ?)";

  dbConnection.execute(
    postQuery,
    [name, surname, email, phone],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

router.delete("/participants/:id", (req, res) => {
  const { id } = req.params;

  dbConnection.execute(
    `DELETE FROM participants WHERE id=(?)`,
    [id],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

module.exports = router;
