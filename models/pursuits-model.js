const db = require("../DB/connection");
exports.selectPursuits = () => {
  return db.query("SELECT * FROM pursuits;").then((res) => {
    return res.rows;
  });
};

exports.insertPursuit = () => {};

exports.updatePursuitByPursuitId = () => {};

exports.selectHostedPursuitByPursuitId = () => {};

exports.selectUserPursuitByPursuitId = () => {};
