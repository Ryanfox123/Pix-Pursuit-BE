const db = require("../DB/connection");

exports.selectUsers = () => {};

exports.insertUsers = () => {};

exports.selectUsersByUsername = () => {};

exports.selectUsersPointsByPursuitId = (id) => {
  return db
    .query(
      `SELECT username, completed_pursuits.points FROM users
    JOIN completed_pursuits ON users.user_ID = completed_pursuits.user_ID
    ORDER BY points DESC
    LIMIT 3
    `
    )
    .then(({ rows }) => {
      return rows;
    });
};

exports.updateUsersPointsByUserId = () => {};

exports.updateUsersPursuitByUserId = () => {};

exports.inserUsersPursuitPoints = () => {};
