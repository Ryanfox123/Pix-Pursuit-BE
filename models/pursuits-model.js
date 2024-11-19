const db = require("../db/connection");

exports.selectPursuits = () => {
  return db.query("SELECT * FROM pursuits;").then((res) => {
    return res.rows;
  });
};

exports.insertPursuit = () => {};

exports.updatePursuitByPursuitId = (id) => {
  return id;
};

exports.selectHostedPursuitByPursuitId = () => {};

exports.selectUserPursuitByPursuitId = (id) => {
  return db
    .query(
      `SELECT * FROM pursuits 
    WHERE pursuit_ID = $1`,
      [id]
    )
    .then((pursuit) => {
      if (!pursuit.rows[0]) {
        return Promise.reject({ status: 404, msg: "404: Pursuit not found" });
      }
      return pursuit.rows[0];
    });
};
