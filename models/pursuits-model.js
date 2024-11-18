const db = require("../DB/connection");
<<<<<<< HEAD
exports.selectPursuits = () => {
  return db.query("SELECT * FROM pursuits;").then((res) => {
    return res.rows;
  });
};
=======

exports.selectPursuits = () => {};
>>>>>>> cd0c47055a81fd5bdd1848b0633206d1c70a358f

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
