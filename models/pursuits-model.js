const db = require("../DB/connection");

exports.selectPursuits = () => {};

exports.insertPursuit = () => {};

exports.updatePursuitByPursuitId = () => {};

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
