const db = require("../DB/connection.js");
exports.selectUsers = () => {
  const queryStr = `SELECT * FROM users`;
  return db.query(queryStr).then(({ rows }) => {
    return rows;
  });
};

exports.insertUsers = () => {};

exports.selectUsersByUsername = () => {};

exports.selectUsersPointsByPursuitId = () => {};

exports.updateUsersPointsByUserId = () => {};

exports.updateUsersPursuitByUserId = () => {};

exports.inserUsersPursuitPoints = () => {};
