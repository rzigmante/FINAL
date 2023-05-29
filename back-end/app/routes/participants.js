const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallBack } = require("../utils/dbUtils");

const router = express.Router();

router.get("/participants", (req, res) => {
  dbConnection.execute(`SELECT * FROM participants`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

router.post("/participants", (req, res) => {
  const {
    body: { name, surname, email, phone },
  } = req;

  dbConnection.execute(
    `INSERT INTO participants (name, surname, email, phone) VALUES (?, ?, ?, ?) `,
    [name, surname, email, phone],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

router.put("/participants/:id", (req, res) => {
  const {
    body: { name, surname, email, phone },
  } = req;
  const { id } = req.params;

  dbConnection.execute(
    `UPDATE participants SET name=?, surname=?, email=?, phone=? WHERE id=?`,
    [name, surname, email, phone, id],

    (err, result) => defaultCallBack(err, result, res)
  );
});

router.delete("/participants/:id", (req, res) => {
  const { id } = req.params;

  dbConnection.execute(
    `DELETE FROM participants WHERE id=?`,
    [id],
    (err, result) => defaultCallBack(err, result, res)
  );
});

module.exports = router;
